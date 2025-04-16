<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\Borrower;
use App\Models\EmiSchedule;
use App\Models\Fund;
use App\Models\Loan;
use App\Models\LoanApplication;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class LoanController extends Controller
{

    // Download receipt
    public function downloadReceipt($id)
    {
        $emiSchedule = EmiSchedule::findOrFail($id);
        $loan = Loan::where('borrower_id', $emiSchedule->loan_id)->first();
        $borrower = Borrower::where('id', $emiSchedule->loan_id)->first();
        $address = Address::where('borrower_id', $emiSchedule->loan_id)->first();
        $pdf = \Barryvdh\DomPDF\Facade\Pdf::loadView('loan.payment-receipt', compact('emiSchedule', 'loan', 'borrower', 'address'));

        return response()->streamDownload(
            function () use ($pdf) {
                echo $pdf->output();
            },
            'payment-receipt_' . $emiSchedule->month_number . '_loan_' . $loan->id . '.pdf'
        );
    }
    //
    public function index()
    {

        $approvedLoans = Borrower::with('loan', 'vehicle')->get();

        return Inertia::render(
            'loan/approved-loan',
            [
                'approvedLoans' => $approvedLoans,
            ]
        );
    }

    // Show the details of a specific approved loan
    public function show($id)
    {
        $loanApplication = Borrower::with('vehicle', 'loan', 'address')->findOrFail($id);

        $emiSchedules = EmiSchedule::where('loan_id', $id)->get();

        // Total amount paid
        $totalPaid = EmiSchedule::where('loan_id', $id)->where('status', 'paid')->sum('emi_amount');

        // Total amount emi paid
        $total_emi_paid = EmiSchedule::where('loan_id', $id)->where('status', 'paid')->count();
        // Total amount emi unpaid
        $total_emi_unpaid = EmiSchedule::where('loan_id', $id)->where('status', 'unpaid')->count();

        return Inertia::render(
            'loan/emi-schedule-payment',
            [
                'loanApplication' => $loanApplication,
                'emiSchedules' => $emiSchedules,
                'totalPaid' => $totalPaid,
                'total_emi_paid' => $total_emi_paid,
                'total_emi_unpaid' => $total_emi_unpaid,
            ]
        );
    }

    // generate EMI schedule
    public function generateEmiSchedule(Request $request)
    {
        $request->validate([
            'loan_id' => 'required|numeric',
            'start_date' => 'required|date',
        ]);

        $loanApplication = Borrower::with('loan')->findOrFail($request->loan_id);
        // Check First if EMI schedule already exists then delete it
        $emiSchedule = EmiSchedule::where('loan_id', $request->loan_id)->first();
        if ($emiSchedule) {
            EmiSchedule::where('loan_id', $request->loan_id)->delete();
        }

        // Generate EMI Schedule
        $startDate = Carbon::parse($request->start_date);
        for ($i = 1; $i <= $loanApplication->loan->loan_term; $i++) {

            EmiSchedule::create([
                'loan_id' => $loanApplication->id,
                'month_number' => $i,
                'due_date' => $startDate->copy()->addMonthsNoOverflow($i),
                'emi_amount' => $loanApplication->loan->emi,
                'status' => 'unpaid',
            ]);
        }
        // Update the loan application with the generated EMI schedule
        return to_route('loan.process', $request->loan_id);
    }

    // Update payment status
    public function updatePaymentStatus(Request $request, $id)
    {
        $emi_payment_date = Carbon::createFromFormat('d-m-Y', $request->payment_date)->format('Y-m-d');
        $emiSchedule = EmiSchedule::findOrFail($id);
        $loan = Loan::where('borrower_id', $emiSchedule->loan_id)->first();

        // Update total outstanding amount
        $monthlyRate = $loan->interest_rate / (12 * 100);

        // Calculate interest and principal components
        $interestComponent = round($loan->outstanding_principal_amount * $monthlyRate, 2);
        $principalComponent = round($emiSchedule->emi_amount - $interestComponent, 2);

        // Update outstanding principal
        $newOutstandingPrincipal = round($loan->outstanding_principal_amount - $principalComponent, 2);

        $current_balance = Fund::select('balance')->orderBy('created_at', 'desc')->limit(1)->first();
        $balance =  $current_balance->balance + number_format((float)$interestComponent, 2, '.', '');

        // Update loan status
        $emiSchedule->update([
            'status' => 'paid',
            'paid_date' => $emi_payment_date,
        ]);



        $loan->update([
            'outstanding_principal_amount' => $newOutstandingPrincipal,
        ]);




        // Start transaction
        DB::beginTransaction();

        try {
            // Add funds for interest
            $fundInterest = Fund::create([
                'type' => 'credit',
                'amount' => $interestComponent,
                'description' => 'Loan Interest For Loan ID: ' . $emiSchedule->loan_id,
                'transaction_date' => $emi_payment_date,
                'balance' => $balance,
                'created_at' => now()
            ]);

            // Get current balance after interest addition
            $curr_balance = Fund::select('balance')->orderBy('created_at', 'desc')->limit(1)->first();

            // Add funds for principal
            $new_balance =  $curr_balance->balance + number_format((float)$principalComponent, 2, '.', '');
            $fundPrincipal = Fund::create([
                'type' => 'credit',
                'amount' => $principalComponent,
                'description' => 'Loan Principal Add for loan ID: ' . $emiSchedule->loan_id,
                'transaction_date' => $emi_payment_date,
                'balance' => $new_balance,
                'created_at' => now()->addSecond() // Add a second to differentiate
            ]);

            // Commit transaction
            DB::commit();
        } catch (\Exception $e) {
            // Rollback transaction
            DB::rollBack();

            // Return error
            return back()->with('error', 'Something went wrong');
        }

        return to_route('loan.process', $emiSchedule->loan_id);
    }
}

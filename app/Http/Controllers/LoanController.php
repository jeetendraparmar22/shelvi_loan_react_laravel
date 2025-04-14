<?php

namespace App\Http\Controllers;

use App\Models\Borrower;
use App\Models\EmiSchedule;
use App\Models\LoanApplication;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Inertia\Inertia;

class LoanController extends Controller
{
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

        return Inertia::render(
            'loan/emi-schedule-payment',
            [
                'loanApplication' => $loanApplication,
                'emiSchedules' => $emiSchedules,
                'totalPaid' => $totalPaid,
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


        $emiSchedule->update([
            'status' => 'paid',
            'paid_date' => $emi_payment_date,
        ]);

        return to_route('loan.process', $emiSchedule->loan_id);
    }
}

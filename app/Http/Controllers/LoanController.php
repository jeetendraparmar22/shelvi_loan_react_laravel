<?php

namespace App\Http\Controllers;

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
        $approvedLoans = LoanApplication::where('loan_status', 'approved')->whereNotNull('approved_date')
            ->where('vehicle_registration_no', '!=', '')
            ->get();

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
        $loanApplication = LoanApplication::findOrFail($id);
        $emiSchedules = EmiSchedule::where('loan_id', $id)->get();

        return Inertia::render(
            'loan/emi-schedule-payment',
            [
                'loanApplication' => $loanApplication,
                'emiSchedules' => $emiSchedules,
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

        $loanApplication = LoanApplication::select('id', 'final_total_amount', 'loan_term', 'interest_rate', 'emi')->findOrFail($request->loan_id);

        // Check First if EMI schedule already exists then delete it
        $emiSchedule = EmiSchedule::where('loan_id', $request->loan_id)->first();
        if ($emiSchedule) {
            EmiSchedule::where('loan_id', $request->loan_id)->delete();
        }

        // Generate EMI Schedule
        $startDate = Carbon::parse($request->start_date);
        for ($i = 1; $i <= $loanApplication->loan_term; $i++) {
            EmiSchedule::create([
                'loan_id' => $loanApplication->id,
                'month_number' => $i,
                'due_date' => $startDate->copy()->addMonthsNoOverflow($i),
                'emi_amount' => $loanApplication->emi,
                'status' => 'unpaid',
            ]);
        }
        // Update the loan application with the generated EMI schedule
        return to_route('loan.process', $request->loan_id);
    }

    // Update payment status
    public function updatePaymentStatus(Request $request, $id)
    {
        $emiSchedule = EmiSchedule::findOrFail($id);
        $emiSchedule->update([
            'status' => 'paid',
            'paid_date' => Carbon::now(),
        ]);

        return to_route('loan.process', $emiSchedule->loan_id);
    }
}

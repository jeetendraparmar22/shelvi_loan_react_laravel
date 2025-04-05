<?php

namespace App\Http\Controllers;

use App\Models\LoanApplication;
use Illuminate\Http\Request;
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
}

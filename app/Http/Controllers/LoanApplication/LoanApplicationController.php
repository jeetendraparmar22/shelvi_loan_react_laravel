<?php

namespace App\Http\Controllers\LoanApplication;

use App\Http\Controllers\Controller;
use App\Models\Address;
use App\Models\BankDetail;
use App\Models\Borrower;
use App\Models\Loan;
use App\Models\Vehicle;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class LoanApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //

        return Inertia::render(
            'loan-application/index',
            [
                'loanApplications' => Borrower::with(['address', 'vehicle', 'loan'])->get(),
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('loan-application/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'first_name' => 'required|string|max:191',
            'last_name' => 'required|string|max:191',
            'surname' => 'required|string|max:191',
            'email' => 'required|email|max:191',
            'mobile_no' => 'required|string|max:191|unique:borrowers,mobile_no',
            'alternate_mobile_no' => 'nullable|string|max:191|unique:borrowers,alternate_mobile_no',
            'adhar_card' => 'required|string|max:191',
            'remark_customer_detail' => 'nullable|string|max:191',

            'address' => 'required|string|max:191',
            'state' => 'nullable|string|max:191',
            'city' => 'nullable|string|max:191',
            'village' => 'nullable|string|max:191',
            'pincode' => 'nullable|integer',

            'vehicle_type' => 'nullable|string|max:191',
            'vehicle_registration_no' => 'nullable|string|max:191',
            'vehicle_registration_year' => 'nullable|integer',
            'chasis_no' => 'nullable|string|max:191',
            'engine_no' => 'nullable|string|max:191',
            'fuel_type' => 'nullable|string|max:191',
            'insurance_company_name' => 'nullable|string|max:191',
            'rc_book' => 'required|file|mimes:jpeg,png,jpg,gif,svg,pdf',
            'insurance_file' => 'required|file|mimes:jpeg,png,jpg,gif,svg,pdf',
            'dealer_name' => 'nullable|string|max:191',

            'file_log_in_date' => 'nullable|date',
            'finance_name' => 'required|string|max:191',
            'finance_address' => 'required|string|max:191',
            'executive_name' => 'nullable|string|max:191',
            'loan_amount' => 'nullable|string|max:191',
            'emi' => 'nullable|numeric',
            'loan_term' => 'nullable|numeric',
            'interest_rate' => 'nullable|string|max:191',
            'loan_surakhya_vimo' => 'nullable|string|max:191',
            'iho' => 'nullable|string|max:191',
            'file_charge' => 'nullable|string|max:191',
            'road_side_assite' => 'nullable|string|max:191',
            'rto_charge' => 'nullable|string|max:191',
            'hold_for_insurance' => 'nullable|string|max:191',
            'loan_status' => 'nullable|string|max:191',
            'approved_date' => 'nullable|date',
            'pdd_approve' => 'nullable|string|max:191',
            'pdd_document_url' => 'nullable|string|max:191',
            'commission_status' => 'nullable|integer',
            'final_total_amount' => 'nullable|string|max:191',
            'remark_loan_detail' => 'nullable|string|max:191',
            'commission' => 'nullable|string|max:191',
            'transfer_status' => 'nullable|integer',
            'user_id' => 'nullable|string|max:191',

            // 'bank.bank_account_holder_name' => 'nullable|string|max:191',
            // 'bank.account_no' => 'nullable|string|max:191',
            // 'bank.bank_name' => 'nullable|string|max:191',
            // 'bank.branch_name' => 'nullable|string|max:191',
            // 'bank.ifsc_code' => 'nullable|string|max:191',
            // 'bank.transfer_loan_amount' => 'nullable|string|max:191',
        ]);

        DB::beginTransaction();

        try {
            // Create Borrower
            $borrower = Borrower::create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'surname' => $request->surname,
                'email' => $request->email,
                'mobile_no' => $request->mobile_no,
                'alternate_mobile_no' => $request->alternate_mobile_no,
                'adhar_card' => $request->adhar_card,
                'remark_customer_detail' => $request->remark_customer_detail,
            ]);

            // Create Address

            Address::create(
                [
                    'borrower_id' => $borrower->id,
                    'address' => $request->address,
                    'country' => $request->country,
                    'state' => $request->state,
                    'city' => $request->city,
                    'village' => $request->village,
                    'pincode' => $request->pincode,
                ]
            );

            // Create Vehicle
            $vehicle =  Vehicle::create([
                'borrower_id' => $borrower->id,
                'vehicle_type' => $request->vehicle_type,
                'vehicle_registration_no' => $request->vehicle_registration_no,
                'vehicle_registration_year' => $request->vehicle_registration_year,
                'chasis_no' => $request->chasis_no,
                'engine_no' => $request->engine_no,
                'fuel_type' => $request->fuel_type,
                'insurance_company_name' => $request->insurance_company_name,
                'rc_book' => $request->file('rc_book')->storeAs('rc-book', $request->file('rc_book')->getClientOriginalName()),
                'insurance_file' => $request->file('insurance_file')->storeAs('insurance-file', $request->file('insurance_file')->getClientOriginalName()),
                'dealer_name' => $request->dealer_name,
            ]);


            // Create Loan
            Loan::create([
                'borrower_id' => $borrower->id,
                'vehicle_id' => $vehicle->id,
                'file_log_in_date' => $request->file_log_in_date,
                'finance_name' => $request->finance_name,
                'finance_address' => $request->finance_address,
                'executive_name' => $request->executive_name,
                'loan_amount' => $request->loan_amount,
                'emi' => $request->emi,
                'loan_term' => $request->loan_term,
                'interest_rate' => $request->interest_rate,
                'loan_surakhya_vimo' => $request->loan_surakhya_vimo,
                'iho' => $request->iho,
                'file_charge' => $request->file_charge,
                'road_side_assite' => $request->road_side_assite,
                'rto_charge' => $request->rto_charge,
                'hold_for_insurance' => $request->hold_for_insurance,
                'loan_status' => 'pending',
                'outstanding_principal_amount' => $request->loan_amount,
            ]);


            // Create Bank Details
            BankDetail::create(
                [
                    'borrower_id' => $borrower->id,
                    'bank_account_holder_name' => $request->bank_account_holder_name,
                    'account_no' => $request->account_no,
                    'bank_name' => $request->bank_name,
                    'branch_name' => $request->branch_name,
                    'ifsc_code' => $request->ifsc_code,
                    'transfer_loan_amount' => $request->transfer_loan_amount,
                ]
            );

            DB::commit();
            return to_route('loan-applications.index')->with('success', 'Loan application created successfully');
        } catch (\Exception $e) {
            DB::rollBack();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //update loan status
        $loan = Borrower::find($id)->loan;
        $loan->update([
            'loan_status' => 'approved',
            'approved_date' => Carbon::now(),
        ]);
        return to_route('loan-applications.index')->with('success', 'Loan application approved successfully');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
        dd("page edit");
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        dd("update data");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

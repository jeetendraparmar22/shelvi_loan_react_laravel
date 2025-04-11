<?php

namespace App\Http\Controllers\Fund;

use App\Http\Controllers\Controller;
use App\Models\Fund;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FundController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //load funds
        $funds = Fund::orderBy('created_at', 'desc')->get();

        return Inertia::render('fund/index', [
            'funds' => $funds,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Store data
        try {
            // Calculate balance
            $current_balance = Fund::select('balance')->orderBy('created_at', 'desc')->limit(1)->first();
            $balance = $request->payment_type == 'credit' ? $current_balance->balance + number_format((float)$request->amount, 2, '.', '') : $current_balance->balance - number_format((float)$request->amount, 2, '.', '');


            Fund::create([
                'amount' => $request->amount,
                'type' => $request->payment_type,
                'description' => $request->description,
                'balance' => $balance,
                'transaction_date' => Carbon::now()->format('Y-m-d'),
            ]);
            return to_route('funds.index')->with('success', 'Fund created successfully');
        } catch (\Exception $e) {
            return back()->with('error', 'Something went wrong');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

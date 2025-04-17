<?php

use App\Http\Controllers\LoanController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});


require __DIR__ . '/funds.php';

// Loan application routes
Route::resource('loan-applications', App\Http\Controllers\LoanApplication\LoanApplicationController::class);

// Loan routes
Route::get('loans/approved', [LoanController::class, 'index'])->name('loan.approved');
Route::get('loan/process/{id}', [LoanController::class, 'show'])->name('loan.process');
Route::post('emi-schedule/generate', [LoanController::class, 'generateEmiSchedule'])->name('emi-schedule.generate');
Route::post('payment-status/update/{id}', [LoanController::class, 'updatePaymentStatus'])->name('payment-status.update');
Route::get('download-receipt/{id}', [LoanController::class, 'downloadReceipt'])->name('download.receipt');
Route::get('force-closer/{id}', [LoanController::class, 'forceCloser'])->name('force.closer');
Route::get('no-due-certificate/{id}', [LoanController::class, 'noDueCertificate'])->name('no.due.certificate');

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';

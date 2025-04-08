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

// Loan routes
Route::get('loans/approved', [LoanController::class, 'index'])->name('loan.approved');
Route::get('loan/process/{id}', [LoanController::class, 'show'])->name('loan.process');
Route::post('emi-schedule/generate', [LoanController::class, 'generateEmiSchedule'])->name('emi-schedule.generate');


require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';

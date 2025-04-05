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

// Test route
Route::get('loans/approved', [LoanController::class, 'index'])->name('loan.approved');

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';

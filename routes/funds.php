<?php

// Fund routes

use Illuminate\Support\Facades\Route;

Route::resource('funds', App\Http\Controllers\Fund\FundController::class);

<?php

use App\Http\Controllers\ApiController;
use Illuminate\Support\Facades\Route;

Route::get('/transactions', [ ApiController::class, 'transactions' ]);
Route::get('/categories', [ ApiController::class, 'categories' ]);

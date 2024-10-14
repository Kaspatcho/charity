<?php

use App\Http\Controllers\ApiController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

Route::get('/transactions', [ ApiController::class, 'transactions' ]);
Route::get('/categories', [ ApiController::class, 'categories' ]);
Route::get('/budgets', [ ApiController::class, 'budgets' ]);
Route::get('/budgets/progress', [ ApiController::class, 'budget_progress' ]);
Route::get('/balance', [ ApiController::class, 'balance' ]);

Route::post('/transaction', [ PostController::class, 'transaction' ]);
Route::post('/category', [ PostController::class, 'category' ]);
Route::post('/budget', [ PostController::class, 'budget' ]);

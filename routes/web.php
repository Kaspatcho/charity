<?php

use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

Route::withoutMiddleware('auth')->group(function() {
    Route::get('/login', [LoginController::class, 'index'])
    ->name('login');

    Route::post('/login', [LoginController::class, 'authenticate'])
    ->name('login.auth');

    Route::view('/signup', 'login.signup')->name('signup');
    Route::post('/register', [LoginController::class, 'register'])->name('register');
});

Route::get('/logout', function() {
    Auth::logout();
    return redirect(route('login'));
})->name('login.logout');

// Catch-all route to serve the React app
Route::view('/{path?}', 'index')
    ->where('path', '.*')
    ->name('react');

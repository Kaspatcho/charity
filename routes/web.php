<?php

use Illuminate\Support\Facades\Route;

// Catch-all route to serve the React app
Route::view('/{path?}', 'index')
    ->where('path', '.*')
    ->name('react');

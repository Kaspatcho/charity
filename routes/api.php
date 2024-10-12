<?php

use App\Models\User;
use Illuminate\Support\Facades\Route;

Route::get('/users/{user}', function (User $user) {
    return $user->only(['id', 'name', 'email', 'currency']);
});

Route::get('/users/{user}/categories', function (User $user) {
    return $user->categories()->get();
});

Route::match(['get', 'post', 'put', 'delete'], '/{path?}', fn() => abort(404));

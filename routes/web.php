<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'api'], function() {
  Route::get('/erro', function () {
      return ['message' => 'ta errado', 'success' => false];
  });

  Route::get('/teste', function () {
      return ['message' => 'Teste API', 'success' => true];
  });

  Route::match(['get', 'post', 'put', 'delete'], '/{path?}', fn() => abort(404));
});

// Catch-all route to serve the React app
Route::view('/{path?}', 'index')
    ->where('path', '.*')
    ->name('react');

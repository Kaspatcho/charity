<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function transaction(Request $request)
    {
        $request->validate([
            'category' => 'required|exists:categories,id',
            'amount' => 'required|decimal:0,2',
            'date' => 'required|date',
            'recurring' => 'required|boolean',
            'description' => 'required',
       ]);
       $user_id = $request->user()->id;

       Transaction::create([
            'user_id' => $user_id,
            'category_id' => $request->input('category'),
            ...$request->only(['amount', 'date', 'recurring', 'description'])
        ]);

       return true;
    }
}

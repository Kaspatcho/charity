<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function transactions(Request $request)
    {
        return Transaction::with([
            'category:id,name as category,type',
            'author:id,currency'
        ])->where('user_id', $request->user()->id)
            ->orderByDesc('date')
            ->get()
            ->map(fn($t) => [
                ...$t->only(['id', 'amount', 'date', 'description', 'recurring']),
                'category' => $t->category->category,
                'type' => $t->category->type,
                'currency' => $t->author->currency,
            ]);
    }
}

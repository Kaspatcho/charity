<?php

namespace App\Http\Controllers;

use App\Models\Budget;
use App\Models\Category;
use App\Models\Transaction;
use App\Rules\CategoryBelongsToUser;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function transaction(Request $request)
    {
        $request->validate([
            'category' => [
                'required',
                new CategoryBelongsToUser($request->user()->id),
            ],
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

    public function category(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'type' => 'required|in:income,expense',
        ]);

        Category::create([
            'user_id' => $request->user()->id,
            ...$request->only(['name', 'type'])
        ]);

        return true;
    }

    public function budget(Request $request)
    {
        $user_id = $request->user()->id;
        $request->validate([
            'category' => [
                'required',
                new CategoryBelongsToUser($user_id),
            ],
            'amount' => 'required|decimal:0,2',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
        ]);

        Budget::create([
            'user_id' => $user_id,
            'category_id' => $request->input('category'),
            ...$request->only(['amount', 'start_date', 'end_date'])
        ]);

        return true;
    }
}

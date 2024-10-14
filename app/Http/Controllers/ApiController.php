<?php

namespace App\Http\Controllers;

use App\Models\Budget;
use App\Models\Category;
use App\Models\Transaction;
use App\Models\User;
use Cache;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function transactions(Request $request)
    {
        $key = 'transactions_' . $request->user()->id;
        return Cache::remember(
            $key,
            30,
            fn () =>
            Transaction::with([
                'category:id,name,type',
                'author:id,currency'
            ])->where('user_id', $request->user()->id)
                ->orderByDesc('date')
                ->get()
        );
    }

    public function categories(Request $request)
    {
        $key = 'categories_' . $request->user()->id;
        return Cache::remember(
            $key,
            10,
            fn () =>
            Category::query()
                ->where('user_id', $request->user()->id)
                ->get(['id', 'name', 'type'])
        );
    }

    public function budgets(Request $request)
    {
        $key = 'budgets_' . $request->user()->id;
        return Cache::remember(
            $key,
            10,
            fn () =>
            Budget::with(['category:id,name,type', 'author:id,currency'])
                ->where('user_id', $request->user()->id)
                ->get()
        );
    }

    public function budget_progress(Request $request)
    {
        $key = 'progress_' . $request->user()->id;
        return Cache::remember($key, 30, function () use ($request) {
            /** @var User $user */
            $user = User::find($request->user()->id);
            return $user->budgets()
                ->with(['category', 'author'])
                ->get()
                ->map(function (Budget $budget) {
                    $amount = Transaction::query()
                        ->where('category_id', $budget->category_id)
                        ->whereBetween('date', [$budget->start_date, $budget->end_date])
                        ->sum('amount');

                    return [...$budget->toArray(), 'total' => $amount];
                });
        });
    }

    public function balance(Request $request)
    {
        $key = 'balance_' . $request->user()->id;
        return Cache::remember($key, 30, function () use ($request) {
            /** @var User $user */
            $user = User::find($request->user()->id);
            return $user->transactions()->with('category:id,type')
                ->get()
                ->map(fn (Transaction $t) => $t->category->type == 'expense' ? -$t->amount : $t->amount)
                ->sum();
        });
    }
}

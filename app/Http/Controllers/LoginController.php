<?php

namespace App\Http\Controllers;

use App\Models\User;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;

class LoginController extends Controller
{
    public function index()
    {
        return view('login.index');
    }

    public function authenticate(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
       ]);

        if (Auth::attempt($request->only('email', 'password'))) {
            return redirect()->intended(route('react'));
        }

        return back()->withErrors([
            'email' => __('auth.failed')
        ])->withInput();
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => ['required', 'max:255'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required', 'confirmed', Password::min(8)->mixedCase()->symbols()],
            'currency' => 'required',
       ]);

       $user = User::create($request->only('name', 'email', 'password', 'currency'));

       Auth::login($user);
        return redirect()->intended(route('react'));
    }
}

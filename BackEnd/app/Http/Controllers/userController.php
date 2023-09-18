<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class userController extends Controller
{
    //
    public function register(Request $request)
    {
        $frm_data = $request->only('username', 'email', 'password', 'address', 'contact_num', 'role');
        $frm_data['password'] = bcrypt($frm_data['password']);
        $frm_data['remember_token'] = Str::random(10);
        $user = User::create($frm_data);

        return response()->json(['message' => "Registration Successfull", 'data' => $frm_data]);
    }

}
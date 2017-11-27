<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\User;

class UsersController extends Controller
{

    public function register(Request $request){
 //       $request->validate([
  //          'first_name' => 'required|string|max:255',
  //          'last_name' => 'required|string|max:255',
  //          'email' => 'required|string|email|max:255|unique:users',
  //          'password' => 'required|string|min:6|confirmed',
   //     ]);

        $user = new User;
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->save();
        return response()->json($user, 200);
    }

    public function getUsers(){
        $users = User::all();
        return response()->json($users, 200);
    }

    public function login(Request $request){
            $email = $request->email;
            $password = $request->password;
            $match = ['email' => $email, 'password' => $password];
            $user = User::where($match)->get();

            if(count($user)){
                return response()->json($user, 200);
            }else{
                return response()->json([ 'message' =>'invalid username or password'], 200);
           }

    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class blogPostController extends Controller
{
    public function displayPage()
    {
        return view("posting");
    }

    public function postText(Request $request)
    {

        Log::debug($request->name);
        Log::debug($request->textarea);


    }
}

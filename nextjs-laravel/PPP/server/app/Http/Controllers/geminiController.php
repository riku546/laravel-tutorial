<?php

namespace App\Http\Controllers;

use App\Lib\Gemini;
use Illuminate\Http\Request;

class geminiController extends Controller
{
    public function index(Request $request)
    {
        try {

            return Gemini::geminiRequest($request->prompt);

        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()]);
        }

    }
}


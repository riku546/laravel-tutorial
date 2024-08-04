<?php

namespace App\Http\Controllers;

use App\Models\Problems;
use Illuminate\Http\Request;

class reviewController extends Controller
{
    //レビュー（星）の新規登録
    public function register(Request $request)
    {
        try {
            $numStar = $request->numStar;
            $problemId = $request->problemId;

            $problem = Problems::where("id", $problemId)->first();

        } catch (\Throwable $th) {
            throw $th;
        }

    }
}

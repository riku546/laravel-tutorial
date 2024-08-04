<?php

namespace App\Http\Controllers;

use App\Models\Problems;
use Illuminate\Http\JsonResponse;

class dbDataFetchController extends Controller
{
    //問題一覧ページに表示する問題データを取得
    public function fetchAllProblems(): JsonResponse
    {
        $problems = Problems::all();
        return response()->json($problems);
    }

    public function fetchPersonalProblems(): JsonResponse
    {//ログインしているゆーざーのIDを取得
        // $userId = Auth::id();
        $userId = 2;
        $problems = problems::where('user_id', $userId)->get();
        return response()->json($problems);
    }
}

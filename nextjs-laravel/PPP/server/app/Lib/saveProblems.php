<?php
//この関数は、ProblemsテーブルにAiが生成した問題文 ヒント 回答 問題のレベル プログラミング言語名を保存する関数

namespace App\Lib;

use App\Models\Problems;
use Illuminate\Support\Facades\Auth;

function saveProblems(array $res, object $request): void
{
    try {

        $problem = new Problems();
        $problem->user_id = Auth::id();
        $problem->problem = $res['problem'];
        $problem->hint = $res['hint'];
        $problem->answer = $res['answer'];
        $problem->level = $request['level'];
        $problem->programmingLang = $request['programmingLang'];
        $problem->save();
    } catch (\Throwable $th) {
        throw $th;
    }
}

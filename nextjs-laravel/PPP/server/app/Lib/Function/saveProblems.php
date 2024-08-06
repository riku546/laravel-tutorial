<?php
//この関数は、ProblemsテーブルにAiが生成した問題文 ヒント 回答 問題のレベル プログラミング言語名を保存する関数

namespace App\Lib\Function;

use App\Models\Problems;

//引数 $resはAiが生成した物  $requestはフロントから渡されたデータ
function saveProblems(array $res, object $request): void
{
    try {
        $problem = new Problems();
        //postmanするときは、Auth::id()使えない
        // $problem->user_id = Auth::id();
        $problem->user_id = 1;
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

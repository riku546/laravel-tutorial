<?php
namespace App\Lib;

use GeminiAPI\Client;
use GeminiAPI\Resources\Parts\TextPart;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Cache;

class Gemini
{

    private string $problemLevel;
    private string $programmingLang;

    public function __construct(object $request)
    {
        $this->problemLevel = $request->problemLevel;
        $this->programmingLang = $request->programmingLang;
    }

    // geminiに問題文 ヒント 回答を生成してもらい、キャッシュしている           
    public function requestGemini(): JsonResponse
    {

        try {
            $res = Cache::remember('javascript', 3600, function () {
                //geminiとの通信
                $client = new Client(env('GEMINI_API_KEY'));
                $chat = $client->geminiPro()->startChat();

                // 問題文 ヒント 回答を生成
                $problem = $chat->sendMessage(new TextPart("{$this->programmingLang}の問題を1つ出してください。または { $this->problemLevel }でお願いします。問題文以外の情報は不要です。"));
                $hint = $chat->sendMessage(new TextPart("先程の問題のヒントを出してください。"));
                $answer = $chat->sendMessage(new TextPart("先程の問題に対する回答をお願いします。また 解説は不要です。 コードだけを提出してください。"));

                //連想配列にしているのは、後にデータベースに格納する際に使いやすいようにするため
                $response = [
                    'problem' => $problem->text(),
                    'hint' => $hint->text(),
                    'answer' => $answer->text(),
                ];

                return $response;
            });


            return response()->json($res);

        } catch (\Throwable $th) {
            return response()->json($th->getMessage());
        }

    }
}

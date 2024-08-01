<?php
namespace App\Lib;

require_once "RequestPrompt.php";

use App\Lib\abstractClass\Ai;
use function App\Lib\RequestPrompt;
use GeminiAPI\Client;
use GeminiAPI\Resources\Parts\TextPart;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Cache;

class Gemini extends Ai
{

    private string $problemLevel;
    private string $programmingLang;

    public function __construct(object $request)
    {
        $this->problemLevel = $request->problemLevel;
        $this->programmingLang = $request->programmingLang;
    }

    // geminiに問題文 ヒント 回答を生成してもらい、キャッシュしている
    public function getAIGeneratedText(): JsonResponse
    {

        try {
            $res = Cache::remember('javascript', 3600, function () {
                //geminiとの通信
                $client = new Client(env('GEMINI_API_KEY'));
                $chat = $client->geminiPro()->startChat();

                // 問題文 ヒント 回答を生成
                ["problemPrompt" => $problemPrompt, "hintPrompt" => $hintPrompt, "answerPrompt" => $answerPrompt] = RequestPrompt($this->programmingLang, $this->problemLevel);
                $problem = $chat->sendMessage(new TextPart($problemPrompt));
                $hint = $chat->sendMessage(new TextPart($hintPrompt));
                $answer = $chat->sendMessage(new TextPart($answerPrompt));

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

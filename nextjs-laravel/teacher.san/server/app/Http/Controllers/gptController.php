<?php

namespace App\Http\Controllers;

use App\Lib\Gpt;
use Illuminate\Http\Request;
use Orhanerday\OpenAi\OpenAi;


class gptController extends Controller
{
    public function returnAndSaveGptRes(Request $request)
    {
        try {
            // $res = Gpt::requestGpt($request);

            $open_ai = new OpenAi(env('GPT_API_KEY'));

            $response = $open_ai->chat([
                "model" => "gpt-3.5-turbo",
                "messages" => [
                    [
                        "role" => "system",
                        "content" => "あなたはプログラミングの先生です。",
                    ],
                    [
                        "role" => "user",
                        "content" => $request->prompt,
                    ],
                ],
            ]);
    
            // return response()->json($response);
            return response()->json($response);

        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
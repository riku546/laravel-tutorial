<?php

namespace App\Http\Controllers;

use GeminiAPI\Client;
use GeminiAPI\Resources\Parts\TextPart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class geminiController extends Controller
{
    public function index(Request $request)
    {
        try {
            //cacheの使用
            return Cache::remember('api_data', 3600, function () {
                $client = new Client(env('GEMINI_API_KEY'));
                $response = $client->geminiPro()->generateContent(
                    new TextPart("javaとはなんですか？"),
                );

                return response()->json($response);
            });
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()]);
        }

    }
}
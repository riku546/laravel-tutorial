<?php
namespace App\Lib;

use GeminiAPI\Client;
use GeminiAPI\Resources\Parts\TextPart;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Cache;

class Gemini
{

    public static function geminiRequest(string $prompt): JsonResponse
    {

        $res = Cache::remember('api_data', 3600, function ($prompt) {

            $client = new Client(env('GEMINI_API_KEY'));
            $response = $client->geminiPro()->generateContent(
                new TextPart($prompt),
            );

            return response()->json($response);
        });

        return $res;

    }
}

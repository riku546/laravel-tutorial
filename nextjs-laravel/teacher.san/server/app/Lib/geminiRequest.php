<?php
namespace App\Lib;

use GeminiAPI\Client;
use GeminiAPI\Resources\Parts\TextPart;
use Illuminate\Http\JsonResponse;

class gemini{
  
  public static function geminiRequest(string $prompt): JsonResponse
  {
      $client = new Client('GEMINI_API_KEY');
      $response = $client->geminiPro()->generateContent(
          new TextPart($prompt),
      );
  
      return response()->json($response);
  }
}
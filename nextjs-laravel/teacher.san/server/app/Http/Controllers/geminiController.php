<?php

namespace App\Http\Controllers;

use GeminiAPI\Client;
use GeminiAPI\Resources\Parts\TextPart;
use Illuminate\Http\Request;

class geminiController extends Controller
{
    public function index(Request $request)
    {
        $client = new Client(env('GEMINI_API_KEY'));
        $response = $client->geminiPro()->generateContent(
            new TextPart($request->input('prompt')),
        );

        return response()->json($response);
    }
}
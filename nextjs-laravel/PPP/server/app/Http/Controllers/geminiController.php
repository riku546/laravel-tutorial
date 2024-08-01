<?php

namespace App\Http\Controllers;

use App\Lib\Gemini;
use Illuminate\Http\Request;

class geminiController extends Controller
{
    public function index(Request $request)
    {

        $gemini = new Gemini($request);
        $res = $gemini->getAIGeneratedText();
        
        return $res;
        
    }
}

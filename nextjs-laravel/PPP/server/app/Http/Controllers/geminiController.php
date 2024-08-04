<?php

namespace App\Http\Controllers;

require_once base_path("app/Lib/Function/saveProblems.php");

use App\Lib\Gemini;
use function App\Lib\Function\saveProblems;
use Illuminate\Http\Request;

class geminiController extends Controller
{

    public function store(Request $request)
    {

        $gemini = new Gemini($request);
        $res = $gemini->getAIGeneratedText();

        saveProblems($res, $request);

        return response()->json($res);

    }
}

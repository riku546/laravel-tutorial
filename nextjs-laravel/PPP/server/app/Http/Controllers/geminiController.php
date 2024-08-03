<?php

namespace App\Http\Controllers;

require_once base_path("app/Lib/saveProblems.php");

use App\Lib\Gemini;
use function App\Lib\saveProblems;
use Illuminate\Http\Request;

class geminiController extends Controller
{

    public function index(){
        
        
    }
    
    public function store(Request $request)
    {

        $gemini = new Gemini($request);
        $res = $gemini->getAIGeneratedText();
        
        saveProblems($res, $request);
        
        return response()->json($res);

    }
}
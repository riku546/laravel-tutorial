<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Support\Facades\Log;

class postListController extends Controller
{
    

    public function index()
    {
        $postLists = Blog::all();
        return view("postList", ["postLists" => $postLists]);
    }

}

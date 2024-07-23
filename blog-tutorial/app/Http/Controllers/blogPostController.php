<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class blogPostController extends Controller
{
    public function index()
    {
        return view("posting");
    }

    public function store(Request $request)
    {

        $validated = $request->validate([
            "user_name" => "required",
            "post_text" => "required",
        ]);

        Blog::create($validated);

        return to_route("PostList");
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Blog;

class postListController extends Controller
{

    public function index()
    {
        $postLists = Blog::all();
        return view("postList", ["postLists" => $postLists]);
    }

    public function update(int $id)
    {

    }

    public function destroy(int $id)
    {
        Blog::find($id)->delete();
        return to_route("postList");
    }

}

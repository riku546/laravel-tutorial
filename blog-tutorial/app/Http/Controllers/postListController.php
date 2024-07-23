<?php

namespace App\Http\Controllers;

class postListController extends Controller
{
    

    public function displayPage()
    {
        $postLists = []
        return view("postList", ["postLists" => $postLists]);
    }

}

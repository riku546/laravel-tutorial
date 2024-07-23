<?php

use App\Http\Controllers\blogPostController;
use App\Http\Controllers\postListController;
use Illuminate\Support\Facades\Route;

//投稿画面表示
Route::get("/", [blogPostController::class, "displayPage"]);
//投稿機能
Route::post("/", [blogPostController::class, "postText"])->name("postText");

//投稿一覧画面表示
Route::get("/postList" , [postListController::class , "displayPage"])->name("displayPostList");


<?php

use App\Http\Controllers\blogPostController;
use App\Http\Controllers\postListController;
use Illuminate\Support\Facades\Route;

//投稿画面表示
Route::get("/", [blogPostController::class, "index"])->name("postPage");
//投稿機能
Route::post("/", [blogPostController::class, "store"])->name("postText");

//投稿一覧画面表示
Route::get("/postList", [postListController::class, "index"])->name("postList");
//投稿の削除
Route::delete("/postList/{id}", [postListController::class, "destroy"])->name("deletePost");

<?php

use App\Http\Controllers\dbDataFetchController;
use App\Http\Controllers\geminiController;
use App\Http\Controllers\gptController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/gpt', [gptController::class, 'returnAndSaveGptRes']);

//問題の生成
Route::post('/geminiGenerate', [geminiController::class, 'store']);

//問題一覧ページに表示する問題データを取得
Route::get("/allProblems", [dbDataFetchController::class, 'fetchAllProblems']);

//ゆーざーが以前に作成した問題を取得
Route::get("/personalProblems", [dbDataFetchController::class, 'fetchPersonalProblems']);

<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\StripeController;
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

//商品のapiルート
Route::get('/allProductsInfo', ProductController::class . '@index');
Route::get('/specificProductInfo/{id}', ProductController::class . '@show');

//支払い機能(stripe)のapiルート
Route::post('/stripePayment', StripeController::class . '@checkout');
//決済ステータスを返す（決済が成功したかの失敗したか）
Route::post('/getCheckoutStatus', StripeController::class . '@getCheckoutStatus');

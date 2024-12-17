<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Stripe\StripeClient;

header('Content-Type: application/json');

class StripeController extends Controller
{
    //決済処理
    // public function checkout(Request $request)
    // {
    //     Stripe::setApiKey(env('STRIPE_SECRET'));

    //     $checkout_session = Session::create([
    //         'line_items' => [[
    //             //stripeに商品を登録したときに取得したprice_idを指定
    //             'price' => "price_1QWf3lDWaqHYMLdlmhM3KHUp",
    //             'quantity' => $request->quantity,
    //         ]],
    //         'mode' => 'payment',
    //         //決済が完了したら購入完了ページにリダイレクト
    //         'return_url' => env("FRONTEND_URL") . '/buyComplete?session_id={CHECKOUT_SESSION_ID}',

    //     ]);

    //     return response()->json(['clientSecret' => $checkout_session->client_secret]);
    // }

    public function checkout(Request $request)
    {
        try {

            $stripe = new \Stripe\StripeClient([
                "api_key" => env('STRIPE_SECRET'),
                "stripe_version" => "2024-11-20.acacia; custom_checkout_beta=v1;",
            ]);

            $checkout_session = $stripe->checkout->sessions->create([
                'line_items' => [
                    [
                        // price_data: {
                        //     currency: 'usd',
                        //     product_data: {
                        //       name: 'T-shirt',
                        //     },
                        //     unit_amount: 2000,
                        //   },
                        'price' => "price_1QWf3lDWaqHYMLdlmhM3KHUp",
                        'quantity' => $request->quantity,
                    ],
                ],
                'mode' => 'payment',
                'ui_mode' => 'custom',
                'return_url' => env("FRONTEND_URL") . '/checkout',
            ]);

            return response()->json(['clientSecret' => $checkout_session->client_secret]);
        } catch (\Throwable $th) {
            Log::debug($th->getMessage());
        }
    }

    //決済ステータス返す（決済が成功した場合は、レスポンスの"status" => "complete" , 失敗した場合は"status" => "open"）
    public function getCheckoutStatus(Request $request)
    {
        try {
            $stripe = new StripeClient(env('STRIPE_SECRET'));

            $json_obj = json_decode($request->getContent());

            $session = $stripe->checkout->sessions->retrieve($json_obj->session_id);

            return response()->json(["status" => $session->status]);
        } catch (\Throwable $th) {
            return response()->json(["error" => $th->getMessage()]);
        }
    }
}

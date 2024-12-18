<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Stripe\StripeClient;

header('Content-Type: application/json');

class StripeController extends Controller
{

    // 決済処理
    public function checkout(Request $request)
    {
        $this->createPriceId($request->productName, $request->price);
        // Stripe::setApiKey(env('STRIPE_SECRET'));

        // $checkout_session = Session::create([
        //     'line_items' => [[
        //         //stripeに商品を登録したときに取得したprice_idを指定
        //         'price' => "price_1QWf3lDWaqHYMLdlmhM3KHUp",
        //         'quantity' => $request->quantity,
        //     ]],
        //     'ui_mode' => 'embedded',
        //     'mode' => 'payment',
        //     //決済が完了したら購入完了ページにリダイレクト
        //     'return_url' => env("FRONTEND_URL") . '/buyComplete?session_id={CHECKOUT_SESSION_ID}',

        // ]);

        // return response()->json(['clientSecret' => $checkout_session->client_secret]);
    }

    //stipeで決済するためには、商品のprice_idが必要なので、商品をstripeに新規登録してprice_idを取得する
    private function create_priceId($productName, $price)
    {
        $stripe = new StripeClient(env('STRIPE_SECRET'));

        //商品をstripeに新規登録
        $new_product = $stripe->products->create(["name" => $productName]);

        //商品の価格をstripeに新規登録
        $new_price = $stripe->prices->create([
            'product' => $new_product->id,
            'unit_amount' => $price,
            'currency' => 'jpy',
        ]);

        //stripeのcheckout(決済)を作成するためにprice_idを返すが必要なので、price_idを返す
        return $new_price->id;
    }

    private function save_new_price_id($stripe_price_id, $product_id)
    {
        try {
            DB::insert('insert into stripe_price_id (product, stripe_price_id) values (?, ?)', [$product_id, $stripe_price_id]);
        } catch (\Throwable $th) {
            throw $th;
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
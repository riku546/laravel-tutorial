<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use Illuminate\Support\Facades\Log;

class ContactController extends Controller
{
    //お問い合わせフォームの画面表示
    public function index()
    {
        return view("contact.index");
    }

    //お問い合わせの完了画面
    public function complete()
    {
        return view("contact.complete");
    }

    public function sendMail(ContactRequest $request)
    {
        $validated = $request->validated();

        // これ以降の行は入力エラーがなかった場合のみ実行されます
        // 登録処理(実際はメール送信などを行う)
        Log::debug($validated['name'] . 'さんよりお問い合わせがありました');
        return to_route('contact.complete');
    }

}

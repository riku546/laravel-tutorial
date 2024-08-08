<?php

namespace App\Http\Controllers;

use App\Models\Stars;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class reviewController extends Controller
{
    //ユーザーからリクエストを受け取り、レビュー（星）の新規登録または更新を行う
    public function processRequest(Request $request): JsonResponse
    {
        //リクエストからデータを取得
        $numStar = $request->numStar;
        $problemId = $request->problemId;
        $userId = $request->userId;

        //ユーザーが既にレビューしているなら、レビューを更新。そうでないなら新規登録
        if ($this->checkAlreadyReviewed($userId, $problemId)) {
            $this->updateReview($userId, $problemId, $numStar);

        } else {
            $this->registerReview($userId, $problemId, $numStar);
        }

        return response()->json(["message" => "success"]);
    }

    public function deleteReview(Request $request): JsonResponse
    {
        try {

            $problemId = $request->problemId;
            $userId = $request->userId;

            $review = new Stars();
            $review->where('user_id', $userId)->where('problem_id', $problemId)->delete();

            return response()->json(["message" => "success"]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    //ユーザーが特定の問題をすでにレビューしているかどうかを確認
    private function checkAlreadyReviewed(int $userId, int $problemId): bool
    {
        $review = new Stars();
        $isReviewed = $review->where('user_id', $userId)->where('problem_id', $problemId)->get();
        if ($isReviewed->isEmpty()) {
            return false;
        } else {
            return true;
        }
    }

    //レビュー（星）の更新
    private function updateReview(int $userId, int $problemId, int $numStar)
    {
        try {
            $review = new Stars();
            $review->where('user_id', $userId)->where('problem_id', $problemId)->update(['num_star' => $numStar]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    //starsテーブルにレビューを新規登録
    private function registerReview(int $userId, int $problemId, int $numStar): void
    {
        try {
            $review = new Stars();
            $review->user_id = $userId;
            $review->problem_id = $problemId;
            $review->num_star = $numStar;
            $review->save();
        } catch (\Throwable $th) {
            throw $th;
        }
    }

}

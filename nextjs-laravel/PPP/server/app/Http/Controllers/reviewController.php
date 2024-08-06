<?php

namespace App\Http\Controllers;

use App\Models\Stars;
use Illuminate\Http\Request;

class reviewController extends Controller
{
    //レビュー（星）の変更と新規登録
    public function update(Request $request)
    {
        $numStar = $request->numStar;
        $problemId = $request->problemId;
        $userId = $request->userId;
        $reviewController = new reviewController();
        $reviewController->saveReview($userId, $problemId, $numStar);
        return response()->json(["message" => "success"]);
    }

    private function saveReview(int $userId, int $problemId, int $numStar): void
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

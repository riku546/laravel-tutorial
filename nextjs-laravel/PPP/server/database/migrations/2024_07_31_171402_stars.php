<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        if (!Schema::hasTable('stars')) {
            Schema::create('stars', function (Blueprint $table) {
                //テーブルが存在しない場合のみ実行

                $table->id();
                $table->unsignedBigInteger('problem_id');
                //1~5の星をつける
                $table->integer("num_star");
                $table->timestamps();
                $table->foreign('problem_id')->references('id')->on('Problems');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;
    //テーブル指定
    protected $table = "blog_posts";
    
    protected $fillable = ["user_name", "post_text"];
}

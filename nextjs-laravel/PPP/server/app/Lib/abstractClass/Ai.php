<?php

namespace App\Lib\abstractClass;

use Illuminate\Http\JsonResponse;

abstract class Ai
{
    private string $problemLevel;
    private string $programmingLang;
    abstract public function getAIGeneratedText(): JsonResponse;
}

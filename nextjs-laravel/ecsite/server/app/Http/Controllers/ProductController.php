<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            Log::debug("ProductController@index");
            $all_product_info = DB::select('select id , name  from products');
            return response()->json($all_product_info);
        } catch (\Throwable $th) {
            return response()->json(['error' => 'An error occurred while fetching the products.'], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        try {
            $specific_product_info = DB::select('select name , description , price , stars from products where id = ?', [$id]);
            Log::debug($specific_product_info);
            return response()->json($specific_product_info);
        } catch (\Throwable $th) {
            return response()->json(['error' => 'An error occurred while fetching the product.'], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

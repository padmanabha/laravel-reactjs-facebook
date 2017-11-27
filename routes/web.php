<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

// lets try a wildcard...
Route::any( '{catchall}', function ( $url ) {
    // at this point we need to look up the url of the page...
    return view('index');

} )->where('catchall', '(.*)');



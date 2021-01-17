<?php

use App\Http\Controllers\FirstController;
use Illuminate\Support\Facades\Route;

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
    return view('welcome');
});

Route::get('/', [FirstController::class, 'index']);
Route::get('/about', [FirstController::class, 'about']);
Route::get('/record', [FirstController::class, 'record']);
Route::get('/level1', [FirstController::class, 'level1']);
Route::get('/level2', [FirstController::class, 'level2']);
Route::get('/level3', [FirstController::class, 'level3']);
Route::get('/level4', [FirstController::class, 'level4']);
Route::get('/score-attack', [FirstController::class, 'scoreAttack']);
Route::get('/survival', [FirstController::class, 'survival']);


<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FirstController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\MainController;

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

Route::get('/', [MainController::class, 'index']);
Route::get('/about', [MainController::class, 'about']);
Route::get('/record', [MainController::class, 'record']);
Route::get('/level1', [GameController::class, 'level1']);
Route::get('/level2', [GameController::class, 'level2']);
Route::get('/level3', [GameController::class, 'level3']);
Route::get('/level4', [GameController::class, 'level4']);
Route::get('/score-attack', [GameController::class, 'scoreAttack']);
Route::get('/survival', [GameController::class, 'survival']);
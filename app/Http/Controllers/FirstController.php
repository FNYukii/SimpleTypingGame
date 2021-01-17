<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FirstController extends Controller
{
  public function index(){
    return view('index');
  }
  public function about(){
    return view('about');
  }
  public function record(){
    return view('record');
  }
  public function level1(){
    return view('level1');
  }
  public function level2(){
    return view('level2');
  }
  public function level3(){
    return view('level3');
  }
  public function level4(){
    return view('level4');
  }
  public function scoreAttack(){
    return view('score-attack');
  }
  public function survival(){
    return view('survival');
  }
}

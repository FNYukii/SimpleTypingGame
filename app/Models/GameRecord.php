<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GameRecord extends Model
{
  // use HasFactory;

  protected $table = 'game_records';

  protected $fillable = ['stage_name'];
}

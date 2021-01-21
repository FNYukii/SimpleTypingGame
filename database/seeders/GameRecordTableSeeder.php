<?php

namespace Database\Seeders;

use App\Models\GameRecord;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GameRecordTableSeeder extends Seeder{

  /**
  * Run the database seeds.
  *
  * @return void
  */

  public function run(){
    DB::transaction(function(){
            
      GameRecord::create([
        'stage_name' => 'Level1'
      ]);
      GameRecord::create([
        'stage_name' => 'Level2'
      ]);
      GameRecord::create([
        'stage_name' => 'Level3'
      ]);
      GameRecord::create([
        'stage_name' => 'Level4'
      ]);
      GameRecord::create([
        'stage_name' => 'Score Attack'
      ]);
      GameRecord::create([
        'stage_name' => 'Survival'
      ]);

    });
  }

}

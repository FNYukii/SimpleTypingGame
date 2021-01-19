<?php

namespace Database\Seeders;

use App\Models\GameRecord;
use Illuminate\Database\Seeder;
// use Log;
use DB;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   *
   * @return void
   */
  public function run()
  {
    // \App\Models\User::factory(10)->create();
    DB::transaction(function(){
      GameRecord::create([
        'stage_name' => 'Level1',
      ]);
      GameRecord::create([
        'stage_name' => 'Level2',
      ]);
      GameRecord::create([
        'stage_name' => 'Level3',
      ]);
      GameRecord::create([
        'stage_name' => 'Level4',
      ]);
      GameRecord::create([
        'stage_name' => 'Score Attack',
      ]);
      GameRecord::create([
        'stage_name' => 'Survival',
      ]);
  
      // Log::debug(GameRecord::count());
    });
    
  }
}
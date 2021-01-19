<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use phpDocumentor\Reflection\Types\Nullable;

class CreateGameRecordsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('game_records', function (Blueprint $table) {
      $table->id();
      $table->timestamps();
      $table->string('stage_name','20');
      $table->integer('played_time') -> nullable();
      $table->integer('typed_count') -> nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('game_records');
  }
}

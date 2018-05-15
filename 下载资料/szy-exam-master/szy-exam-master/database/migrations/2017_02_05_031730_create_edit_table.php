<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEditTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('edit', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('questions_id')->unsigned();//题库id
            $table->text('edit_name');//编辑题题目
            $table->text('edit_answer');//编辑题答案
            $table->softDeletes();  //deleted_at
            $table->timestamps();
        });
        Schema::table('edit', function ($table) {
            $table->foreign('questions_id')->references('id')->on('questions'); //
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('questions');
    }
}

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFillTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fill', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('questions_id')->unsigned();//题库id
            $table->text('fill_name');//填空题题目
            $table->softDeletes();  //deleted_at
            $table->timestamps();
        });
        Schema::table('fill', function ($table) {
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

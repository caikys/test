<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEssayTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('essay', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('questions_id')->unsigned();//题库id
            $table->text('essay_name');//问答题题目
            $table->text('essay_answer');//问答题答案
            $table->softDeletes();  //deleted_at
            $table->timestamps();
        });
        Schema::table('essay', function ($table) {
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

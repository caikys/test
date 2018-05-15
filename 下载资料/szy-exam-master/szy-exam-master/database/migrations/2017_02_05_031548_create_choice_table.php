<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChoiceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('choice', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('questions_id')->unsigned();//题库id
            $table->enum('type',array("0","1"));
            $table->text('choice_name');//选择题题目
            $table->text('supply')->nullable();//题目补充
            $table->string('pic',255)->nullable();//图片补充
            $table->softDeletes();  //deleted_at
            $table->timestamps();
        });
        Schema::table('choice', function ($table) {
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

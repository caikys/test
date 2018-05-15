<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBackstageChoiceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('backstage_choice', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('choice_id')->unsigned();//填空题id
            $table->string('serial',10);//序号
            $table->string('content',255);//选择题答案解释
            $table->tinyInteger('know')->default(0);//答案是否正确
            $table->softDeletes();  //deleted_at
            $table->timestamps();
        });
        Schema::table('backstage_choice', function ($table) {
            $table->foreign('choice_id')->references('id')->on('choice'); //
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

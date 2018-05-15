<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserChoiceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_choice', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('choice_id')->unsigned();//填空题id
            $table->string('serial',10);//序号
            $table->tinyInteger('judge')->default(0);//答案是否正确
            $table->softDeletes();  //deleted_at
            $table->timestamps();
        });
        Schema::table('user_choice', function ($table) {
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

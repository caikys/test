<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserEssayTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_essay', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('essay_id')->unsigned();//问答题id
            $table->string('serial',10);//题号
            $table->text('essay_answer')->nullable();//答案
            $table->softDeletes();  //deleted_at
            $table->timestamps();
        });
        Schema::table('user_essay', function ($table) {
            $table->foreign('essay_id')->references('id')->on('essay'); //
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

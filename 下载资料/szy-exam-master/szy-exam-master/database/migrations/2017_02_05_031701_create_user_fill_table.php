<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserFillTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_fill', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('fill_id')->unsigned();//填空题id
            $table->string('serial',10);//序号
            $table->string('content',255)->nullable();//填空题答案
            $table->tinyInteger('judge')->default(0);//是否正确
            $table->softDeletes();  //deleted_at
            $table->timestamps();
        });
        Schema::table('user_fill', function ($table) {
            $table->foreign('fill_id')->references('id')->on('fill'); //
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

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateManagementTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('management', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('users_id')->unsigned();//用户id
            $table->string('state',10)->nullable();//是否完成笔试状态
            $table->date('begin')->nullable();//开始时间
            $table->date('finish')->nullable();//考试结束时间
            $table->string('choice_accuracy',10)->nullable();//单选正确率
            $table->string('multiple_accuracy',10)->nullable();//多选正确率
            $table->string('fill_accuracy',10)->nullable();//填空正确率
            $table->string('totality_accuracy',10)->nullable();//总体正确率
            $table->softDeletes();  //deleted_at
            $table->timestamps();
        });
        Schema::table('management', function ($table) {
            $table->foreign('users_id')->references('id')->on('users'); //
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

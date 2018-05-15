<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('questions', function (Blueprint $table) {
            $table->increments('id');//题库id
            $table->string('question_name',50);//题库名称
            $table->string('icon',50)->nullable();//题库图标
            $table->string('memo',255)->nullable();//说明
            $table->integer('total_time');//总分钟
            $table->date('question_date');//题库创建时间
            $table->softDeletes();  //deleted_at
            $table->timestamps();
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

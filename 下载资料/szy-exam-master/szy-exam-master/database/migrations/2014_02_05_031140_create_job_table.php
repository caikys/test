<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateJobTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('job', function (Blueprint $table) {
            $table->increments('id');//岗位ID
            $table->integer('questions_id')->unsigned();//题库id
            $table->string('job_name',30);//岗位名称
            $table->softDeletes();  //deleted_at
            $table->timestamps();
        });
        Schema::table('job', function ($table) {
            $table->foreign('questions_id')->references('id')->on('questions'); //questions_id关联questions id
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

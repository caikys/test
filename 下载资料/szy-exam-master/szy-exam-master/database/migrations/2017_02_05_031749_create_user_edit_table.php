<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserEditTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_edit', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('edit_id')->unsigned();//编辑题id
            $table->string('serial',10);//题号
            $table->text('edit_answer')->nullable();//答案
            $table->softDeletes();  //deleted_at
            $table->timestamps();
        });
        Schema::table('user_edit', function ($table) {
            $table->foreign('edit_id')->references('id')->on('edit'); //
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

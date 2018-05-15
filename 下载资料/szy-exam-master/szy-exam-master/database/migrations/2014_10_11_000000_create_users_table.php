<?php


use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('Job_id')->unsigned();//岗位id
            $table->string('name');//用户名
            $table->string('email');//电子邮箱
            $table->string('password');//密码
            $table->rememberToken();//记住密码标志，可为空
            $table->string('username');  //真实姓名
            $table->enum('sex',array("男","女")); //性别
            $table->string('birth_date',50)->nullable();  //出生日期
            $table->enum('user_type',array("0","1"))->default('1'); //用户类型
            $table->softDeletes();  //deleted_at
            $table->timestamps();
        });
        Schema::table('users', function ($table) {
            $table->foreign('Job_id')->references('id')->on('job'); //
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('users');
    }
}

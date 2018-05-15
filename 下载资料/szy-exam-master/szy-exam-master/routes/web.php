<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//前台管理模块
Route::group(['prefix' =>'home','namespace' =>'Home'],function (){
    //功能模块 home/p
    Route::group(['prefix' =>'p','namespace' =>'P'],function (){

    });
    //接口模块 home/c
    Route::group(['prefix' =>'c','namespace' =>'C'],function (){
        
    });
});

//后台管理模块
Route::group(['prefix' =>'admin','namespace' =>'Admin'],function () {
    //功能模块 admin/p
    Route::group(['prefix' =>'p','namespace' =>'P'],function (){
        Route::get('operating','JobController@job');//岗位管理
        Route::get('Problem','JobController@choice');//题目管理
        Route::get('gather','JobController@question');//题库管理
        Route::get('user','JobController@user');//用户管理
    });
    //接口模块 admin/c
    Route::group(['prefix' =>'c','namespace' =>'C'],function (){
        //岗位管理
        Route::delete('job/deletes', 'JobController@batch_destroy');
        Route::get('job/query', 'JobController@query');
        Route::resource('job', 'JobController');

        //题库管理
        Route::delete('question/deletes', 'QuestionController@batch_destroy');
        Route::get('question/query', 'QuestionController@query');
        Route::resource('question', 'QuestionController');

        //题目管理
        Route::get('subject/query', 'SubjectController@query');
        Route::resource('subject','SubjectController');

        //选择题
        Route::resource('choice','ChoiceController');
        
        //填空题
        Route::resource('fill','FillController');
        
        //编辑题
        Route::resource('modify','modifyController');
        
        //问答题
        Route::resource('essay','EssayController');
    });
});
Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

// Route::get('/aaa',function() {
//     return 1;
// });

Route::get('/home', 'HomeController@index');

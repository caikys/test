<?php

namespace App\Http\Controllers\Admin\P;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
class JobController extends Controller
{
    //岗位管理
    public function job()
    {
        //测试新建下拉显示数据
//        $questions = DB::table('questions')
//            ->whereNull('deleted_at')
//            ->select('id','question_name')
//            ->get();
//        return view('test',compact('questions'));
    }

    //题目管理
    public function choice()
    {
        
    }

    //题库管理
    public function question()
    {
//        return view('test');
    }

    //用户管理
    public function user()
    {
        
    }
}

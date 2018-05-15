<?php

namespace App\Http\Controllers\Admin\C;

use App\Http\Model\Essay;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class EssayController extends Controller
{
    //新增
    public function store(Request $request)
    {
        return $this->storeOrUpdate($request);
    }

    //修改
    public function update(Request $request, $id)
    {
        return $this->storeOrUpdate($request,$id);
    }

    //新增或修改
    public function storeOrUpdate(Request $request,$id = 0)
    {
        $this->validate($request,[
            'essay_name'=>'string|max:2000',
            'essay_answer'=>'string|max:2000'
        ]);
        $essay_name = $request->input('essay_name');
        $essay_answer = $request->input('essay_answer');
        $questions_id = $request->input('questions_id');
        if($id > 0){
            $essay = Essay::find($id);
        }else{
            $essay = new Essay;
        }
        $essay->essay_name = $essay_name;
        $essay->essay_answer = $essay_answer;
        $essay->questions_id = $questions_id;
        
        if ($essay->save()) {
            return response()->json("true");
        }else{
            return response()->json("false");
        }
    }
    
    //编辑
    public function edit($id)
    {
        $essay = Essay::find($id);
        return response()->json($essay);
    }

    //单条删除
    public function destroy($id)
    {
        //
    }

    public function show($id)
    {
        //
    }
    public function index()
    {
//        $questions = DB::table('questions')
//            ->whereNull('deleted_at')
//            ->select('id','question_name')
//            ->get();
//        return view('test',compact('questions'));
    }
    public function create()
    {
        //
    }
}

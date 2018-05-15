<?php

namespace App\Http\Controllers\Admin\C;

use App\Http\Model\Edit;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class ModifyController extends Controller
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
            'edit_name'=>'string|max:2000',
            'edit_answer'=>'string|max:2000'
        ]);
        $edit_name = $request->input('edit_name');
        $edit_answer = $request->input('edit_answer');
        $questions_id = $request->input('questions_id');
        if($id > 0){
            $edit = Edit::find($id);
        }else{
            $edit = new Edit;
        }
        $edit->edit_name = $edit_name;
        $edit->edit_answer = $edit_answer;
        $edit->questions_id = $questions_id;

        if ($edit->save()){
            return response()->json("true");
        }else{
            return response()->json("false");
        }
    }

    //编辑
    public function edit($id)
    {
        $edit = Edit::find($id);
        return response()->json($edit);
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

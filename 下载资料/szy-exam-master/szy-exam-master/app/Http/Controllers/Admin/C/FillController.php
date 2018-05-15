<?php

namespace App\Http\Controllers\Admin\C;

use App\Http\Model\Fill;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class FillController extends Controller
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
            'fill_name'=>'string|max:2000'
        ]);
        $fill_name = $request->input('fill_name');
        $questions_id = $request->input('questions_id');

        if($id > 0){
            $fill = Fill::find($id);
        }else{
            $fill = new Fill;
        }

        
        $fill->fill_name = $fill_name;
        $fill->questions_id = $questions_id;

        if ($fill->save()){
            return response()->json("true");
        }else{
            return response()->json("false");
        }
    }

    //编辑
    public function edit($id)
    {
        $fill = Fill::find($id);
        return response()->json($fill);
    }

    //删除
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

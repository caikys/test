<?php

namespace App\Http\Controllers\Admin\C;

use App\Http\Model\Backstage_choice;
use App\Http\Model\Choice;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
class ChoiceController extends Controller
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
    
    //编辑
    public function edit($id)
    {
        $choice = DB::table('choice')
            ->join('backstage_choice','backstage_choice.choice_id','choice.id')
            ->where('choice.id',$id)
            ->select('type','choice_name','supply','pic','choice_id','serial','content','know')
            ->first();
        return response()->json($choice);
    }

    //新增或修改
    public function storeOrUpdate(Request $request,$id = 0)
    {
        $this->validate($request,[
            'type'=>'required',
            'choice_name'=>'required|string|max:2000',
            'supply'=>'string|max:2000',
            'pic'=>'string'
        ]);
        $type = $request->input('type');
        $questions_id = $request->input('questions_id');
        $choice_name = $request->input('choice_name');
        $supply = $request->input('supply');
        $pic = $request->input('pic');
        
        if ($id > 0) {
            $choice = Choice::find($id);
        }else{
            $choice = new Choice;
        }

        $choice->type = $type;
        $choice->questions_id = $questions_id;
        $choice->choice_name = $choice_name;
        $choice->supply = $supply;
        $choice->pic = $pic;
        if ($choice->save()){
//            $params = $request->input('params');
//            if (!isset($params)){
//                return response()->json("false");
//            }
//            $backstage = new Backstage_choice;
//            foreach ($params as $k=>$v) {
//                $backstage->choice_id = $choice->id;
//                $backstage->serial = ;
//                $backstage->content = ;
//                $backstage->know = ;
//                if ($backstage->save()){
//                    return response()->json("true");
//                }else{
//                    return response()->json("false");
//                }
//            }
            return response()->json("true");
        }else{
            return response()->json("false");
        }
    }
    
    //单条删除
    public function destroy($id)
    {
        $backstage = DB::table('backstage_choice')->where('choice_id',$id)->get();
        if ($backstage->delete()) {    //软删除
            $choice = Choice::find($id);
            if ($choice->delete()){
                return response()->json("true");
            }else{
                return response()->json("false");
            }
        } else {
            return response()->json("false");
        }

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

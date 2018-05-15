<?php

namespace App\Http\Controllers\Admin\C;

use App\Http\Model\Questions;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class QuestionController extends Controller
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
            'question_name'=>'required|string|max:30',
            'icon'=>'string|max:30',
            'memo'=>'string|max:255',
            'total_time'=>'integer|required',
            'question_date'=>'required'
        ]);
        $question_name = $request->input('question_name');
        $icon = $request->input('icon');
        $total_time = $request->input('total_time');
        $memo = $request->input('memo');
        $question_date = $request->input('question_date');

        if($id > 0){
            $questions = Questions::find($id);
        }else{
            $questions = new Questions;
        }
        $questions->question_name = $question_name;
        $questions->icon = $icon;
        $questions->total_time = $total_time;
        $questions->memo = $memo;
        $questions->question_date = $question_date;

        if ($questions->save()){
            return response()->json("true");
        }else{
            return response()->json("false");
        }
    }

    //编辑数据
    public function edit($id)
    {
        $questions = Questions::find($id)
                     ->select('id','question_name','icon','total_time','memo','question_date')
                     ->first();
        return response()->json($questions);
//        return view('test',compact('questions'));
    }

    //查询
    public function query(Request $request)
    {
        $request->flash();
        $questions = Questions::whereNull('deleted_at');

        $params = $request->input('params');

        if (!isset($params)) {
            $params = array();
            if (!empty($request->all())) {
                $params = $request->all();
            }
        }

        $query_text = isset($params['query_text']) ? $params['query_text'] : '';
        if ($query_text != '') {
            $texts = explode(' ', $query_text);
            foreach ($texts as $text) {
                $questions = $questions->where('question_name', 'like', '%' . $text . '%');
            }
        }

        //日期条件
        $beforeDate= isset($params['query_beforeDate'])?$params['query_beforeDate']:'';
        $afterDate = isset($params['query_afterDate'])?$params['query_afterDate']:'';

        if ($beforeDate != '' && $beforeDate != null) {

            $questions = $questions->where('question_date','>=',$beforeDate);
        }

        if ($afterDate != '' && $afterDate != null) {

            $questions = $questions->where('question_date','<=',$afterDate);
        }

        $questions = $questions->select('question_name','icon','total_time','memo','question_date')->get();
        return response()->json($questions);
    }

    //单条删除
    public function destroy($id)
    {
        $job = Questions::find($id);
        if ($job->delete()) {    //软删除
            return response()->json("true");
        } else {
            return response()->json("false");
        }
    }

    //全选删除
    public function batch_destroy(Request $request)
    {
        $ids = $request->input('ids');
        if ($ids != null && count($ids) > 0) {
            $num = Questions::destroy($ids);
            if ($num > 0) {
                return response()->json($num);
            } else {
                return response()->json("false");
            }
        } else {
            return response()->json("false");//没有获取到ids则返回-1
        }
    }

    public function show($id)
    {
        //
    }
    public function index()
    {
        //
    }
    public function create()
    {
        //
    }
}

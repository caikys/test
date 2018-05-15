<?php

namespace App\Http\Controllers\Admin\C;

use App\Http\Model\Job;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class JobController extends Controller
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
            'job_name'=>'required'
        ]);
        $job_name = $request->input('job_name');
        $questions_id = $request->input('questions_id');

        if($id > 0){
            $job = Job::find($id);
        }else{
            $job = new Job;
        }
        $job->job_name = $job_name;
        $job->questions_id = $questions_id;
        if ($job->save()){
            return response()->json("true");
        }else{
            return response()->json("false");
        }
    }
    
    //查询所有题库
    public function select_questions()
    {
        $questions = DB::table('questions')
            ->whereNull('deleted_at')
            ->select('id','question_name')
            ->get();
        return response()->json($questions);
    }
    
    //编辑数据
    public function edit($id)
    {
        $job = DB::table('job')
            ->join('questions','job.questions_id','=','questions.id')
            ->where('job.id','=',$id)
            ->select('job.job_name as job_name','questions.question_name as question_name','job.id as id')
            ->first();
        
        //查询所有题库
        $questions = DB::table('questions')
            ->whereNull('deleted_at')
            ->select('id','question_name')
            ->get();
        return response()->json(['job'=>$job,'questions'=>$questions]);
//        return view('test',compact('job','questions'));
    }
    //查询
    public function query(Request $request)
    {
        $request->flash();
        $jobs = DB::table('job')
            ->join('questions','job.questions_id','=','questions.id')
            ->whereNull('job.deleted_at');

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
                $jobs = $jobs->where('job.job_name', 'like', '%' . $text . '%');
            }
        }

        $jobs = $jobs->select('job.job_name','questions.question_name')->get();
        return response()->json($jobs);
    }

    //全选删除
    public function batch_destroy(Request $request)
    {
        $ids = $request->input('ids');
        if ($ids != null && count($ids) > 0) {
            $num = Job::destroy($ids);
            if ($num > 0) {
                return response()->json($num);
            } else {
                return response()->json("false");
            }
        } else {
            return response()->json("false");//没有获取到ids则返回-1
        }
    }

    //单条删除
    public function destroy($id)
    {
        $job = Job::find($id);
        if ($job->delete()) {    //软删除
            return response()->json("true");
        } else {
            return response()->json("false");
        }
    }


    public function show($id)
    {
        //
    }
    public function create()
    {
        //
    }
    public function index()
    {
        //
    }
}

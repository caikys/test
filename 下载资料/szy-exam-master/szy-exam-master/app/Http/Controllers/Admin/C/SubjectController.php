<?php

namespace App\Http\Controllers\Admin\C;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class SubjectController extends Controller
{
    public function query(Request $request)
    {
        $request->flash();
        $subject =DB::table('questions')
            ->join('choice','choice.questions_id','=','questions.id')
            ->join('fill','fill.questions_id','=','questions.id')
            ->join('edit','edit.questions_id','=','questions.id')
            ->join('essay','essay.questions_id','=','questions.id')
            ->whereNull('choice.deleted_at')
            ->whereNull('fill.deleted_at')
            ->whereNull('edit.deleted_at')
            ->whereNull('essay.deleted_at');

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
                $subject = $subject->where('choice.choice_name', 'like', '%' . $text . '%')
                                   ->where('fill.fill_name','like', '%' . $text . '%')
                                   ->where('edit.edit_name','like', '%' . $text . '%')
                                   ->where('essay.essay_name','like', '%' . $text . '%');
            }
        }

        //日期条件
//        $beforeDate= isset($params['query_beforeDate'])?$params['query_beforeDate']:'';
//        $afterDate = isset($params['query_afterDate'])?$params['query_afterDate']:'';
//
//        if ($beforeDate != '' && $beforeDate != null) {
//
//            $subject = $subject->where('question_date','>=',$beforeDate);
//        }
//
//        if ($afterDate != '' && $afterDate != null) {
//
//            $subject = $subject->where('question_date','<=',$afterDate);
//        }

        $subject = $subject->select(
            'questions.id as qid',
            'choice.choice_name as cname',
            'choice.type as ctype',
            'choice.questions_id as cid',
            'choice.created_at as ccreated_at',
            'choice.updated_at as cupdated_at',
            'fill.fill_name as fname',
            'fill.questions_id as fid',
            'fill.created_at as fcreated_at',
            'fill.updated_at as fupdated_at',
            'edit.edit_name as ename',
            'edit.questions_id as eid',
            'edit.created_at as ecreated_at',
            'edit.updated_at as eupdated_at',
            'essay.essay_name as yname',
            'essay.questions_id as yid',
            'essay.created_at as ycreated_at',
            'essay.updated_at as yupdated_at')
            ->paginate();
            return response()->json($subject);
//        return view('test',compact('subject'));
    }

    public function edit($id)
    {
        //
    }

    public function destroy($id)
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
    public function store(Request $request)
    {
        //
    }
    public function show($id)
    {
        //
    }
    public function update(Request $request, $id)
    {
        //
    }
}

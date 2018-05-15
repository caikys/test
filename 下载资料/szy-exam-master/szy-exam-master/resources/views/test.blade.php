<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div>
        {{--题库新建--}}
        {{--<form action="{{url('admin/c/question')}}" method="post">--}}
            {{--{{method_field('POST')}}--}}
            {{--{{csrf_field()}}--}}
            {{--<td>题库名称</td>--}}
            {{--<input type="text" name="question_name">--}}

            {{--<td>题库图标</td>--}}
            {{--<input type="text" name="icon">--}}

            {{--<td>说明</td>--}}
            {{--<input type="text" name="memo">--}}

            {{--<td>总时间</td>--}}
            {{--<input type="text" name="total_time">--}}

            {{--<td>创建时间</td>--}}
            {{--<input type="text" name="question_date">--}}
            {{--<input type="submit" value="提交">--}}
        {{--</form>--}}

        {{--题库编辑--}}
        {{--<form action="{{url('admin/c/question/'.$questions->id)}}" method="post">--}}
            {{--{{method_field('put')}}--}}
            {{--{{csrf_field()}}--}}
            {{--<td>题库名称</td>--}}
            {{--<input type="text" name="question_name" value="{{$questions->question_name}}">--}}

            {{--<td>题库图标</td>--}}
            {{--<input type="text" name="icon" value="{{$questions->icon}}">--}}

            {{--<td>说明</td>--}}
            {{--<input type="text" name="memo" value="{{$questions->memo}}">--}}

            {{--<td>总时间</td>--}}
            {{--<input type="text" name="total_time" value="{{$questions->total_time}}">--}}

            {{--<td>创建时间</td>--}}
            {{--<input type="text" name="question_date" value="{{$questions->question_date}}">--}}
            {{--<input type="submit" value="提交">--}}
        {{--</form>--}}

        {{--岗位管理新建--}}
        {{--<form action="{{url('admin/c/job')}}" method="post">--}}
            {{--{{method_field('POST')}}--}}
            {{--{{csrf_field()}}--}}
            {{--<td>岗位名称</td>--}}
            {{--<input type="text" name="job_name">--}}

            {{--<td>题库名称</td>--}}
            {{--<select name="questions_id">--}}
                {{--@foreach($questions as $e)<option value="{{$e->id}}">{{$e->question_name}}</option>--}}
                {{--@endforeach--}}
            {{--</select>--}}
            {{--<input type="submit" value="提交">--}}
        {{--</form>--}}

        {{--岗位管理编辑--}}
        {{--<form action="{{url('admin/c/job/'.$job->id)}}" method="post">--}}
            {{--{{method_field('put')}}--}}
            {{--{{csrf_field()}}--}}
            {{--<td>岗位名称</td>--}}
            {{--<input type="text" name="job_name" value="{{$job->job_name}}">--}}
            {{--<td>题库名称</td>--}}
            {{--<select name="questions_id">--}}
                {{--@foreach($questions as $e)--}}
                    {{--<option value="{{$e->id}}">{{$e->question_name}}</option>--}}
                {{--@endforeach--}}
            {{--</select>--}}
            {{--<input type="submit" value="提交">--}}
        {{--</form>--}}

        {{--选择题新增--}}
        {{--<form action="{{url('admin/c/choice')}}" method="post">--}}
            {{--{{method_field('POST')}}--}}
            {{--{{csrf_field()}}--}}
            {{--<td>题型</td>--}}
            {{--<select name="type">--}}
                {{--<option value="0">单选题</option>--}}
                {{--<option value="1">多选题</option>--}}
            {{--</select>--}}
            {{--<td>题库</td>--}}
            {{--<select name="questions_id">--}}
                {{--@foreach($questions as $e)<option value="{{$e->id}}">{{$e->question_name}}</option>--}}
                {{--@endforeach--}}
            {{--</select>--}}
            {{--<td>题目</td>--}}
            {{--<textarea name="choice_name" id="" cols="30" rows="10"></textarea>--}}
            {{--<td>补充</td>--}}
            {{--<textarea name="supply" id="" cols="30" rows="10"></textarea>--}}
            {{--<input type="submit" value="提交">--}}
        {{--</form>--}}

        {{--填空题新增--}}
        {{--<form action="{{url('admin/c/fill')}}" method="post">--}}
            {{--{{method_field('POST')}}--}}
            {{--{{csrf_field()}}--}}
            {{--<td>题库</td>--}}
            {{--<select name="questions_id">--}}
                {{--@foreach($questions as $e)--}}
                    {{--<option value="{{$e->id}}">{{$e->question_name}}</option>--}}
                {{--@endforeach--}}
            {{--</select>--}}
            {{--<td>题目</td>--}}
            {{--<textarea name="fill_name" id="" cols="30" rows="10"></textarea>--}}
            {{--<input type="submit" value="提交">--}}
        {{--</form>--}}

        {{--编辑题新增--}}
        {{--<form action="{{url('admin/c/modify')}}" method="post">--}}
            {{--{{method_field('POST')}}--}}
            {{--{{csrf_field()}}--}}
            {{--<td>题库</td>--}}
            {{--<select name="questions_id">--}}
                {{--@foreach($questions as $e)--}}
                    {{--<option value="{{$e->id}}">{{$e->question_name}}</option>--}}
                {{--@endforeach--}}
            {{--</select>--}}
            {{--<td>题目</td>--}}
            {{--<textarea name="edit_name" id="" cols="30" rows="10"></textarea>--}}
            {{--<td>答案</td>--}}
            {{--<textarea name="edit_answer" id="" cols="30" rows="10"></textarea>--}}
            {{--<input type="submit" value="提交">--}}
        {{--</form>--}}

        {{--问答题新增--}}
        {{--<form action="{{url('admin/c/essay')}}" method="post">--}}
            {{--{{method_field('POST')}}--}}
            {{--{{csrf_field()}}--}}
            {{--<td>题库</td>--}}
            {{--<select name="questions_id">--}}
                {{--@foreach($questions as $e)--}}
                    {{--<option value="{{$e->id}}">{{$e->question_name}}</option>--}}
                {{--@endforeach--}}
            {{--</select>--}}
            {{--<td>题目</td>--}}
            {{--<textarea name="essay_name" id="" cols="30" rows="10"></textarea>--}}
            {{--<td>答案</td>--}}
            {{--<textarea name="essay_answer" id="" cols="30" rows="10"></textarea>--}}
            {{--<input type="submit" value="提交">--}}
        {{--</form>--}}

        {{--测试query数据--}}
        {{--<pre>--}}
        {{--@foreach($subject as $v)--}}
            {{--<td>{{$v->qid}}</td>--}}
            {{--<td>{{$v->cname}}</td>--}}
            {{--<td>{{$v->ctype}}</td>--}}
            {{--<td>{{$v->cid}}</td>--}}
            {{--<td>{{$v->ccreated_at}}</td>--}}
            {{--<td>{{$v->cupdated_at}}</td>--}}
            {{--<td>{{$v->fid}}</td>--}}
            {{--<td>{{$v->fname}}</td>--}}
            {{--<td>{{$v->fcreated_at}}</td>--}}
            {{--<td>{{$v->fupdated_at}}</td>--}}
        {{--@endforeach--}}
        {{--</pre>--}}
    </div>
</body>
</html>
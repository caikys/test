<?php

namespace App\Http\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Users extends Model
{
    use Notifiable;
    use SoftDeletes;
    protected $dates = ['deleted_at']; //开启deleted_at
    protected $table='users';  //绑定users表
    protected $fillable = [
        'name', 'email', 'password','username','sex','user_type','job_id'
    ];
    protected $hidden = [
        'password', 'remember_token',
    ];
}

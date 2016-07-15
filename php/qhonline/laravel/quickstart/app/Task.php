<?php

namespace App;

/**
 * Explain : this file was generate by command line `php artisan make:model Task`
 *
 * dùng model tasks vẫn tự nhận table task
 * 
 * all Laravel app folders are auto-loaded using the PSR-4 auto-loading standard
 *
 */

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Task extends Model
{
    use SoftDeletes;
    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     *
     * phải nhập column vào đây thì mới add được
     */
    protected $fillable = ['name', 'email'];

    /**
     * Get the user that owns the task.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

<?php

namespace App;

/**
 * Explain : this file was generate by command line `php artisan make:model Task`
 * 
 * dùng model tasks vẫn tự nhận table task
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
}

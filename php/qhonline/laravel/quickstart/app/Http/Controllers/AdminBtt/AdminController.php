<?php
/**
 * Created by PhpStorm.
 * User: Truong
 * Date: 17-Jul-16
 * Time: 12:37 AM
 */

namespace App\Http\Controllers\AdminBtt;

use App\Http\Controllers\Controller;

class AdminController extends Controller
{
    public function index()
    {
        echo route('admin.list');
        return "<br>123";
    }
}
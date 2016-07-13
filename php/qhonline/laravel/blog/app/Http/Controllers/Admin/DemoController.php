<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class DemoController extends Controller
{
    public function getIndex() {
        die("index");
    }

    public function getData() {
        die("get data");
    }
}

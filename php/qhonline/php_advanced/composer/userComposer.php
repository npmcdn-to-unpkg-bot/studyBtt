<?php
/**
 * Created by PhpStorm.
 * User: Truong
 * Date: 11-Jul-16
 * Time: 10:53 PM
 * Nhờ đã autoload ở composer.json rồi nên ở đây cứ thế mà dùng
 */

require "vendor/autoload.php";
use App\Library as MyApp;
$a = new MyApp\Demo();
$a->test();
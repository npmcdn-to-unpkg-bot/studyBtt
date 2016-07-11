<?php
/**
 * Created by PhpStorm.
 * User: Truong
 * Date: 11-Jul-16
 * Time: 9:55 PM
 */

use Application as Myapp;

$a = new Myapp\ABC();
$a->test();

function __autoload($class) {
    $name = str_replace("\\", "/", $class);
    include ("$name.php");
}


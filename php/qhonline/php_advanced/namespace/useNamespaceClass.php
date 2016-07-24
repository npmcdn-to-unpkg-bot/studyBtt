<?php
/**
 * Created by PhpStorm.
 * User: Truong
 * Date: 11-Jul-16
 * Time: 9:55 PM
 */

use Application\ABCdef;

function __autoload($class) {
    // $name = str_replace("\\", "/", $class);
    include ("Application\ABCdef.php");
}

$a = new ABCdef;
$a->test();

<?php
/**
 * Created by PhpStorm.
 * User: Truong
 * Date: 11-Jul-16
 * Time: 9:26 PM
 */

include "a.php";

//$a = new ABC();
/**
 * Vì ở a.php dã khai báo namespace
 */
$a = new \My\Application\Truongbt\ABC;
echo $a::blue."<br>";
echo \My\Application\Truongbt\red;
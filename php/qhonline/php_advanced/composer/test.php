<?php
/**
 * Created by PhpStorm.
 * User: Truong
 * Date: 11-Jul-16
 * Time: 10:43 PM
 */

require "vendor/autoload.php";

use Monolog\Logger;
use Monolog\Handler\StreamHandler;

// create a log channel
$log = new Logger('name');
$log->pushHandler(new StreamHandler('log/my.log', Logger::WARNING));

// add records to the log
$log->warning('Foo');
$log->error('Bar');
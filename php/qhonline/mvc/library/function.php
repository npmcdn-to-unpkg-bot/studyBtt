<?php
/**
 * Created by PhpStorm.
 * User: MSI
 * Date: 12-May-16
 * Time: 2:24 PM
 */

function __autoload($url)
{
    $url = strtolower($url);
    $url = str_replace("_", "/", $url);
    $url = str_replace("model", "models", $url);
    require("$url.php");
}

function loadview($name, $data = "")
{
    require("views/$name.php");
}

function redirect($url)
{
    header("Location: $url");
    exit;
}
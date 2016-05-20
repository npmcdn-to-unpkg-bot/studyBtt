<?php

/**
 * Created by PhpStorm.
 * User: MSI
 * Date: 19-May-16
 * Time: 2:59 PM
 */
class MyLibrary
{
    public function __construct($param)
    {
        echo $param['title'];
    }

    public function test()
    {
        $CI =& get_instance();
        $CI->load->helper("url");
        echo base_url()."MyLibrary test<br>";
    }
}
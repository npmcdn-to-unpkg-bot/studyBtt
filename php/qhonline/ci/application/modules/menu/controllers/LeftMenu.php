<?php

/**
 * Created by PhpStorm.
 * User: MSI
 * Date: 20-May-16
 * Time: 10:07 AM
 */
class LeftMenu extends MX_Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function testfunction($id)
    {
        echo "Module menu Controller LeftMenu Action testfunction with param $id";
    }
}
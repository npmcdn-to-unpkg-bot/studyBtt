<?php

/**
 * Created by PhpStorm.
 * User: MSI
 * Date: 19-May-16
 * Time: 3:35 PM
 */
class MY_Controller extends CI_Controller
{
    protected $_leftMenu;
    public function __construct()
    {
        parent::__construct();
        $this->_leftMenu = "Left Menu";
    }
}
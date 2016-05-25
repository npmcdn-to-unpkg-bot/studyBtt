<?php

/**
 * Created by PhpStorm.
 * User: Truong
 * Date: 25-May-16
 * Time: 10:04 PM
 */
class AdminController extends MY_Controller
{
    protected $_data;

    public function __construct()
    {
        parent::__construct();
        $this->_data['theme'] = "theme/template";
        $this->_data['titlePage'] = "Project CI";
    }
}
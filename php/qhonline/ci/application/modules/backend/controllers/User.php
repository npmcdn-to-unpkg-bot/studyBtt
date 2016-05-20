<?php

/**
 * Created by PhpStorm.
 * User: MSI
 * Date: 20-May-16
 * Time: 10:26 AM
 */
class User extends MX_Controller
{
    protected $_data;
    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        $this->_data['data'] = "Module Backend Controller User Action index";
        $this->_data['loadPage'] = "user/index_view";
        $this->load->view("template", $this->_data);
    }
}
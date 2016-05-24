<?php

/**
 * Created by PhpStorm.
 * User: Truong
 * Date: 23-May-16
 * Time: 11:06 PM
 */
class User extends MX_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->helper("url");
    }

    public function index()
    {
        $this->load->view("themeALT/template");
    }
}
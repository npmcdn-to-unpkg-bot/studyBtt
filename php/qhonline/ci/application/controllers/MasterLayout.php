<?php

/**
 * Created by PhpStorm.
 * User: Truong
 * Date: 20-May-16
 * Time: 12:12 AM
 */
class MasterLayout extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        $data['loadPage'] = "masterlayout/index_view";
        $this->load->view("template", $data);
    }
}
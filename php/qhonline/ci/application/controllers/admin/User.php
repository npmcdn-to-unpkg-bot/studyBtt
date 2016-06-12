<?php

/**
 * Created by PhpStorm.
 * User: MSI
 * Date: 13-May-16
 * Time: 4:31 PM
 */
class User extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        $ar = array(
            'title' => "Dir : admin, controller : user, action : index222"
        );

        $this->load->view('admin/index_view', $ar);
    }
}
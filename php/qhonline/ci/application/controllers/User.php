<?php

/**
 * Created by PhpStorm.
 * User: MSI
 * Date: 13-May-16
 * Time: 4:22 PM
 */
class User extends CI_Controller
{
    protected $_data;
    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        $this->load->model("Muser");
        $this->_data['listUser'] = $this->Muser->listUser();
        $this->load->view('user/index_view', $this->_data);
    }

    public function add()
    {
        $this->load->view('user/index_view', $this->_data);
    }

    public function update()
    {
        $this->load->view('user/index_view', $this->_data);
    }

    public function delete()
    {
        $this->load->view('user/index_view', $this->_data);
    }
}
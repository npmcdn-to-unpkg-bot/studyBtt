<?php

/**
 * Created by PhpStorm.
 * User: Truong
 * Date: 23-May-16
 * Time: 11:06 PM
 */
class User extends AdminController
{
    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        $this->_data['titlePage'] = "User Management";
        $this->load->model("Muser");
        $config['base_url'] = base_url().'admin/user/index';
        $config['total_rows'] = $this->Muser->countAll();
        $config['per_page'] = 2;
        $config['uri_segment'] = 4;
        $config['first_link'] = false;
        $config['last_link'] = false;
        $config['first_tag_open'] = '<li>';
        $config['first_tag_close'] = '</li>';
        $config['prev_link'] = '&laquo';
        $config['prev_tag_open'] = '<li class="prev">';
        $config['prev_tag_close'] = '</li>';
        $config['next_link'] = '&raquo';
        $config['next_tag_open'] = '<li>';
        $config['next_tag_close'] = '</li>';
        $config['last_tag_open'] = '<li>';
        $config['last_tag_close'] = '</li>';
        $config['cur_tag_open'] = '<li class="active"><a href="#">';
        $config['cur_tag_close'] = '</a></li>';
        $config['num_tag_open'] = '<li>';
        $config['num_tag_close'] = '</li>';
        $this->load->library('pagination', $config);

        $start = $this->uri->segment(4);
        $this->_data['loadPage'] = "user/index_view";
        $this->_data['listUser'] = $this->Muser->listAllUser($config['per_page'], $start);
        $this->_data['pageLink'] = $this->pagination->create_links();

        $this->load->view($this->_data['theme'], $this->_data);
    }
}
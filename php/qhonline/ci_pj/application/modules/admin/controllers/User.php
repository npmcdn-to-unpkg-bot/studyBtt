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
        $this->load->library("BTT_Library");

        $this->_data['titlePage'] = "User Management";
        $this->load->model("Muser");
        $config['base_url'] = base_url() . 'admin/user/index';
        $config['total_rows'] = $this->Muser->countAll();
        $config['per_page'] = PAGINATION_PER_PAGE;
        $config['uri_segment'] = 4;

        $start = $this->uri->segment(4);
        $this->_data['loadPage'] = "user/index_view";
        $this->_data['listUser'] = $this->Muser->listAllUser(PAGINATION_PER_PAGE, $start);
        $this->_data['pageLink'] = $this->btt_library->MyPagination($config);

        $this->load->view($this->_data['theme'], $this->_data);
    }

    public function add()
    {
        $this->load->model(array("Muser", "Mlevel"));

        $this->load->helper("form");
        $this->load->library("form_validation");
        if ($this->input->post("add")) {
//            $this->form_validation->CI =& $this;
            $this->form_validation->set_rules("username", "Username", "required|min_length[4]");
//            $this->form_validation->set_rules("password", "Password", "required|matches[password]");
//            $this->form_validation->set_rules("email", "Email", "required|valid_mail");

            if ($this->form_validation->run()) {
                echo "insert";
            }
        }
        $this->_data['titlePage'] = "Add New User";
        $this->_data['loadPage'] = "user/add_view";
        $this->_data['controller'] = $this;

        $this->load->view($this->_data['theme'], $this->_data);
    }
}
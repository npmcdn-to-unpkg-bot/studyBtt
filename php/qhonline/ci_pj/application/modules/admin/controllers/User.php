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
        $this->load->model(array("Muser", "Mlevel"));
    }

    public function index()
    {
        $this->load->library("BTT_Library");

        $this->_data['titlePage'] = "User Management";
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
        $this->load->helper("form");
        $this->load->library("form_validation");
        if ($this->input->post("add")) {
            $this->form_validation->CI =& $this;
            $this->form_validation->set_rules("username", "Username", "required|min_length[4]|callback_checkUsername");
            $this->form_validation->set_rules("password", "Password", "required|matches[re_password]");
            $this->form_validation->set_rules("re_password", "Re-password", "required");
            $this->form_validation->set_rules("email", "Email", "required|valid_email|is_unique[user.email]",
                array(
                    'is_unique' => 'This %s already exist'
                )
            );

            if ($this->form_validation->run()) {
                $dataInsert = array(
                    'username' => $this->input->post("username"),
                    'password' => $this->input->post("password"),
                    'email' => $this->input->post("email"),
                    'firstname' => $this->input->post("firstname"),
                    'lastname' => $this->input->post("lastname"),
                    'level_id' => $this->input->post("level"),
                    'status' => $this->input->post("status"),
                );
                $this->Muser->insertUser($dataInsert);
                redirect(base_url()."admin/user");
            } else {
                $this->_data['data_form'] = $this->input->post();
            }
        }
        $this->_data['titlePage'] = "Add New User";
        $this->_data['loadPage'] = "user/add_view";
        $this->_data['controller'] = $this;

        $this->load->view($this->_data['theme'], $this->_data);
    }

    public function checkUsername($user)
    {
        $userCheck = $this->Muser->checkUsername($user);
        if (count($userCheck) > 0) {
            $this->form_validation->set_message("checkUsername", "Your username has been exist");
            return false;
        }
        return true;
    }
}
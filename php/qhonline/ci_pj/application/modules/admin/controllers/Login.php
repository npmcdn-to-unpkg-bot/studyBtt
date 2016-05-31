<?php

/**
 * Created by PhpStorm.
 * User: Truong
 * Date: 31-May-16
 * Time: 10:59 PM
 */
class Login extends MX_Controller
{
    protected $_data;

    public function __construct()
    {
        parent::__construct();
        $this->load->library(array("session"));

    }

    public function index()
    {
        $this->load->library("form_validation");
        $this->load->model("Muser");
        if ($this->input->post("login")) {
            $this->form_validation->CI =& $this;
            $this->form_validation->set_rules("username", "Username", "required");
            $this->form_validation->set_rules("password", "Password", "required");

            if ($this->form_validation->run()) {
                $dataLogin = array(
                    'username' => $this->input->post("username"),
                    'password' => md5($this->input->post("password"))
                );
                if ($this->Muser->checkLogin($dataLogin)) {
                    echo "DONE"; die;
                } else {
                    $this->session->set_flashdata("flash_error", "Username or Password was incorrect");
                }
            } else {
                $this->_data['data_form'] = $this->input->post();
            }
        }

        $this->load->view("login/index_view", $this->_data);
    }
}
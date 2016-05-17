<?php

/**
 * Created by PhpStorm.
 * User: MSI
 * Date: 16-May-16
 * Time: 4:44 PM
 */
class Form extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->helper(array('form', 'url'));
    }

    public function index()
    {
        $this->load->library('form_validation');
        $this->form_validation->set_rules("fullname", "fuck you", "required|min_length[6]|is_unique[user.name]|callback_checkUser");
        $this->form_validation->set_rules("password", "Password", "required");
        if ($this->form_validation->run() == false) {

        }

        $this->load->view("form/index_view.php");
    }

    public function checkUser($user)
    {
        $this->load->model("Muser");
        if (count($this->Muser->getUserByName($user)) > 0) {
            $this->form_validation->set_message("checkUser", "Your username was exist");
            return FALSE;
        } else {
            return TRUE;
        }
    }
}
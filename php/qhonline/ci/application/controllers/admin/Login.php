<?php

/**
 * Created by PhpStorm.
 * User: MSI
 * Date: 18-May-16
 * Time: 8:44 AM
 */
class Login extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->helper("url");
        $this->load->library("session");
    }

    public function index()
    {
        $this->load->library('form_validation');

        $this->load->model("Muser");
        $data['error'] = array();
        if ($this->input->post("ok")) {
            $this->form_validation->set_rules("username", "fuck you", "required|min_length[6]");
            $this->form_validation->set_rules("password", "Password", "required");
            $data['data_form'] = $this->input->post();
            if ($this->form_validation->run()) {
                $user = $this->input->post("username");
                $password = md5($this->input->post("password"));
                $checkLogin = $this->Muser->checkLogin($user, $password);
                if ($checkLogin) {
                    $data_session = array(
                        "ses_username" => $checkLogin['name'],
                        "ses_level" => $checkLogin['lvl_id'],
                        "ses_id" => $checkLogin['id']
                    );
                    $this->session->set_userdata($data_session);
                    $this->session->set_flashdata("login", "Login success");
                    redirect(base_url() . "index.php/admin/login/profile");
                } else {
                    $data["error"] = "Login fail";
                }
            }
        }

        $this->load->view("admin/login/index_view", $data);
    }

    public function profile()
    {
        if ($this->session->userdata("ses_id") != "") {
            $data['login'] = $this->session->flashdata("login");
            $data['user'] = $this->session->userdata("ses_username");
            $this->load->view("admin/login/profile", $data);
        } else {
            $this->session->set_flashdata("forbidden", "You must login first");
            redirect(base_url()."index.php/admin/login");
        }
    }

    public function logout()
    {
        $this->session->sess_destroy("ses_level");
        redirect(base_url()."index.php/admin/login/profile");
    }
}
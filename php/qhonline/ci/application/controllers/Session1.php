<?php

/**
 * Created by PhpStorm.
 * User: MSI
 * Date: 17-May-16
 * Time: 4:57 PM
 */
class Session1 extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->library("session");
        $this->load->helper("url");
    }

    public function index()
    {
        $data = array(
            "id" => 5,
            "username" => "truongbt",
            "email" => "d10cn2btt@gmail.com",
            "level" => 2
        );
        $this->session->set_userdata($data);
        redirect(base_url()."index.php/session1/getSession");
    }

    public function getSession()
    {
        $user = $this->session->userdata("username");
        echo $user;
        $allData = $this->session->all_userdata();
        echo "<pre>";
        var_dump($allData);
        die;
    }
}
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends MY_Controller
{

    /**
     * Index Page for this controller.
     *
     * Maps to the following URL
     *   http://example.com/index.php/welcome
     * - or -
     *   http://example.com/index.php/welcome/index
     * - or -
     * Since this controller is set as the default controller in
     * config/routes.php, it's displayed at http://example.com/
     *
     * So any other public methods not prefixed with an underscore will
     * map to /index.php/welcome/<method_name>
     * @see https://codeigniter.com/user_guide/general/urls.html
     */
    public function index()
    {
        $this->output->cache(2);
        $this->load->helper("url");
        $config['title'] = "This is title";
        $this->load->library("MyLibrary", $config);
        $this->mylibrary->test();
        echo base_url() . "<br>";
        echo $this->_leftMenu;
        echo current_url();
        $this->load->view('welcome_message');
    }

    public function routes()
    {
        $this->output->cache(2);
        echo $this->uri->segment(3);
    }

    public function jsonZend()
    {
        $data = array(
            "name" => "Kenny",
            "email" => "kenny@qhonline.info",
            "website" => "www.qhonline.edu.vn",
        );
        $this->load->library("Zend");
        $this->zend->load("Zend_Json");
        $str = $this->Zend_Json->encode($data);
        echo $str;
        $data2 = $this->Zend_Json->decode($str);
        echo "<pre>";
        print_r($data2);
        echo "</pre>";
    }
}

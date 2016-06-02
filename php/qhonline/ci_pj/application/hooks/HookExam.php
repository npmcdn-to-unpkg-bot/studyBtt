<?php

/**
 * Created by PhpStorm.
 * User: Truong
 * Date: 02-Jun-16
 * Time: 10:41 PM
 */
class HookExam
{
    protected $_CI;

    public function __construct()
    {
        $this->_CI = &get_instance();
        $this->_CI->load->library("Zend");
        $this->_CI->zend->load("Zend_Acl");
    }

    public function setRoles()
    {
        $this->_CI->Zend_Acl->addRoles(new Zend_Acl_Role("mod"));
        $this->_CI->Zend_Acl->addRoles(new Zend_Acl_Role("admin"));
    }

    public function setResources()
    {
        $this->_CI->Zend_Acl->add(new Zend_Acl_Resource('xxxx'));
    }

    public function checkAuthen()
    {
        $module = $this->_CI->router->fetch_module();
        $controller = $this->_CI->router->fetch_class();
        $action = $this->_CI->router->fetch_method();
        if ($module != "admin" || $controller != "login" || $action != "index") {
            if ($this->_CI->session->userdata('is_login')) {

            } else {
                $this->_CI->session->set_flashdata("flash_error", "You must login");
                redirect('admin/login');
            }
        }
    }
}
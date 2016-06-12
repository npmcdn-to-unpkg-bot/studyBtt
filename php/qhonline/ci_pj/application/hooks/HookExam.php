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
        $this->_CI->Zend_Acl->addRole(new Zend_Acl_Role("mod"));
        $this->_CI->Zend_Acl->addRole(new Zend_Acl_Role("admin"));
    }

    public function setResources()
    {
        $this->_CI->Zend_Acl->add(new Zend_Acl_Resource('admin/user'));
        $this->_CI->Zend_Acl->add(new Zend_Acl_Resource('admin/category'));
        $this->_CI->Zend_Acl->add(new Zend_Acl_Resource('admin/login'));
        $this->_CI->Zend_Acl->add(new Zend_Acl_Resource('admin/news'));
    }

    public function setAccess()
    {
        $this->_CI->Zend_Acl->allow("mod", "admin/user", array("index"));
        $this->_CI->Zend_Acl->allow("admin", array("admin/user", 'admin/category', 'admin/news'));

        $this->_CI->Zend_Acl->allow(array("mod", "admin"), "admin/login");
    }

    public function checkAuthen()
    {
        $module = $this->_CI->router->fetch_module();
        $controller = $this->_CI->router->fetch_class();
        $action = $this->_CI->router->fetch_method();
        if ($module != "admin" || $controller != "login" || $action != "index") {
            if ($this->_CI->session->userdata('is_login')) {
                $role = strtolower($this->_CI->session->userdata('role'));
                $this->setRoles();
                $this->setResources();
                $this->setAccess();
                $resource = $module != "" ? $module . '/' . $controller : $controller;
                if ($this->_CI->Zend_Acl->has($resource)) {
                    if ($this->_CI->Zend_Acl->isAllowed($role, $resource, $action)) {
//                        die("allowed");
                    } else {
                        $this->_CI->session->set_flashdata("flash_error", "You don't have permission to access this action");
                        redirect('admin/login');
                    }
                } else {
                    die("Let's set resources");
                }
            } else {
                $this->_CI->session->set_flashdata("flash_error", "You must login");
                redirect('admin/login');
            }
        }
    }
}
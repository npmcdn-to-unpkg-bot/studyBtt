<?php

/**
 * Created by PhpStorm.
 * User: MSI
 * Date: 19-May-16
 * Time: 2:48 PM
 */
class HookExam
{
    protected $_CI;

    public function test()
    {
        echo "Hook Called<br>";
    }

    public function __construct()
    {
        $this->_CI = &get_instance();
        $this->_CI->load->library("Zend");
        $this->_CI->zend->load("Zend_Acl");
    }

    public function setRoles()
    {
        $this->_CI->Zend_Acl->addRole(new Zend_Acl_Role("guest"));
        $this->_CI->Zend_Acl->addRole(new Zend_Acl_Role("member"));
        $this->_CI->Zend_Acl->addRole(new Zend_Acl_Role("admin"));
    }

    public function setResources()
    {
        $this->_CI->Zend_Acl->add(new Zend_Acl_Resource("welcome"));
        $this->_CI->Zend_Acl->add(new Zend_Acl_Resource("user"));
    }

    public function setAccess()
    {
        $this->_CI->Zend_Acl->allow("guest", "welcome", array("index"));
        $this->_CI->Zend_Acl->allow("member", "welcome");
        $this->_CI->Zend_Acl->allow("admin");
    }

    public function checkAccess()
    {
        $controller = $this->_CI->router->fetch_class();
        $action = $this->_CI->router->fetch_method();
        $role = "member";
        $this->setRoles();
        $this->setResources();
        $this->setAccess();
        if (!$this->_CI->Zend_Acl->isAllowed($role, $controller, $action)) {
            die("access forbidden");
        }
    }
}
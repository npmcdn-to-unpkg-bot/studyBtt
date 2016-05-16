<?php

/**
 * Created by PhpStorm.
 * User: MSI
 * Date: 16-May-16
 * Time: 3:01 PM
 */
class Muser extends CI_Model
{
    protected $_table = "user";
    public function __construct()
    {
        $this->load->database();
        return parent::__construct();
    }

    public function listUser()
    {
        $this->db->select('user.*, lv.level_name');
        $this->db->from($this->_table);
        $this->db->join("level as lv", "lv.id = user.lvl_id");
        $this->db->order_by("id DESC");
        $query = $this->db->get();
        return $query->result_array();
    }
}
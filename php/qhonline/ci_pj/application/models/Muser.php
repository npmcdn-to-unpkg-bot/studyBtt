<?php

/**
 * Created by PhpStorm.
 * User: Truong
 * Date: 25-May-16
 * Time: 10:19 PM
 */
class Muser extends CI_Model
{
    protected $_table = "user";
    const STATUS_ACTIVE = 1;
    public function __construct()
    {
        parent::__construct();
    }

    public function listAllUser($perPage, $start)
    {
        $this->db->select('user.*, lvl.level_name, lvl.description, concat(user.firstname, user.lastname) as fullname');
        $this->db->from($this->_table);
        $this->db->where(array('status' => self::STATUS_ACTIVE));
        $this->db->join('level as lvl', 'lvl.id = user.level_id');
        $this->db->limit($perPage, $start);
        $query = $this->db->get();
        return $query->result_array();
    }

    public function countAll()
    {
        return $this->db->count_all($this->_table);
    }
}
<?php

/**
 * Created by PhpStorm.
 * User: Truong
 * Date: 26-May-16
 * Time: 11:08 PM
 */
class Mlevel extends CI_Model
{
    protected $_table = "level";

    public function __construct()
    {
        parent::__construct();
    }

    public function getAllLevel()
    {
        $this->db->select("*");
        $this->db->from($this->_table);
        $query = $this->db->get();
        return $query->result();
    }
}
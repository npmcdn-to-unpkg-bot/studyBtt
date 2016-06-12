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
    const STATUS_INACTIVE = 0;
    const STATUS_DELETE = -1;

    public function __construct()
    {
        parent::__construct();
    }

    public function listAllUser($perPage, $start)
    {
        $this->db->select('user.*, lvl.level_name, lvl.description, concat(user.firstname, user.lastname) as fullname');
        $this->db->from($this->_table);
        $this->db->where('status !=', self::STATUS_DELETE);
        $this->db->join('level as lvl', 'lvl.id = user.level_id');
        $this->db->limit($perPage, $start);
        $query = $this->db->get();
        return $query->result_array();
    }

    public function countAll()
    {
        return $this->db->count_all($this->_table);
    }

    public static function getStatusUser($status = null)
    {
        $listStatus = array(
            self::STATUS_ACTIVE => "Active",
            self::STATUS_INACTIVE => "Inactive",
            self::STATUS_DELETE => "Deleted",
        );
        return $status != null ? $listStatus[$status] : $listStatus;
    }

    public function checkUsername($user)
    {
        $this->db->where("username", $user);
        $query = $this->db->get($this->_table);
        return $query->result_array();
    }

    public function insertUser($dataInsert)
    {
        return $this->db->insert($this->_table, $dataInsert);
    }

    public function getUserById($id)
    {
        $this->db->where("id", $id);
        $query = $this->db->get($this->_table);
        //get one row
        return $query->row_array();
    }

    public function updateUser($data_update, $id)
    {
        $this->db->where("id", $id);
        $this->db->update($this->_table, $data_update);
    }

    public function deleteUser($id)
    {
        $this->db->where("id", $id);
        $this->db->delete($this->_table);
    }

    public function checkLogin($dataLogin)
    {
        $this->db->from($this->_table." as u");
        $this->db->select('u.id, u.email, concat(u.firstname, u.lastname) as fullname, lvl.level_name');
        $this->db->where("username", $dataLogin['username']);
        $this->db->where("password", $dataLogin['password']);
        $this->db->where('status !=', self::STATUS_DELETE);
        $this->db->join('level as lvl', 'lvl.id = u.level_id');
        $query = $this->db->get();
        return $query->row_array();
    }
}
<?php

/**
 * Created by PhpStorm.
 * User: Truong
 * Date: 04-Jun-16
 * Time: 10:43 PM
 */
class Mcategory extends CI_Model
{
    protected $_table = "categories";
    const STATUS_ACTIVE = 1;
    const STATUS_INACTIVE = 0;
    const STATUS_DELETE = -1;

    public function __construct()
    {
        parent::__construct();
    }

    public function listAllCate($perPage, $start)
    {
        $this->db->select("*");
        $this->db->from($this->_table);
        $this->db->where("status", self::STATUS_ACTIVE);
        $this->db->limit($perPage, $start);
        $query = $this->db->get();
        return $query->result_array();
    }

    public function countAll()
    {
        return $this->db->count_all($this->_table);
    }

    public static function getStatusCate($status = null)
    {
        $listStatus = array(
            self::STATUS_ACTIVE => "Active",
            self::STATUS_INACTIVE => "Inactive",
            self::STATUS_DELETE => "Deleted",
        );
        return $status != null ? $listStatus[$status] : $listStatus;
    }

    public function insertCate($dataInsert)
    {
        return $this->db->insert($this->_table, $dataInsert);
    }

    public function dequy($list, $id_parent, $level = "==", $idCateParentCurrent, $idCateCurrent)
    {
        foreach ($list as $key => $value) {
            $select = "";
            if ($value['parent'] == $id_parent) {
                if ($idCateParentCurrent == $value['id']) {
                    $select = "selected";
                }
                if ($value['id'] != $idCateCurrent)
                    echo "<option $select value='" . $value['id'] . "'>" . $level . " " . $value['name'] . "</option>";
                $this->dequy($list, $value['id'], $level . "==", $idCateParentCurrent, $idCateCurrent);
            }
        }
    }

    public static function getMenuCate($idCateParentCurrent = "", $idCateCurrent = "")
    {
        $Mcate = new Mcategory();
        $list = $Mcate->listAllCate(10, 0);
        $Mcate->dequy($list, 0, "==", $idCateParentCurrent, $idCateCurrent);
    }

    public function getCateById($idCate)
    {
        $this->db->where("id", $idCate);
        $query = $this->db->get($this->_table);
        //get one row
        return $query->row_array();
    }

    public function updateCate($data_update, $id)
    {
        $this->db->where("id", $id);
        $this->db->update($this->_table, $data_update);
    }
}
<?php

/**
 * Created by PhpStorm.
 * User: Truong
 * Date: 08-Jun-16
 * Time: 9:43 PM
 */
class Mnews extends CI_Model
{
    protected $_table = "news";
    const FOLDERUPLOAD = "uploads/news";

    const STATUS_ACTIVE = 1;
    const STATUS_INACTIVE = 0;
    const STATUS_DELETE = -1;

    public static function getStatusCate($status = null)
    {
        $listStatus = array(
            self::STATUS_ACTIVE => "Active",
            self::STATUS_INACTIVE => "Inactive",
            self::STATUS_DELETE => "Deleted",
        );
        return $status != null ? $listStatus[$status] : $listStatus;
    }

    public function insertNews($data)
    {
        $this->db->insert($this->_table, $data);
    }

    public function countAll()
    {
        return $this->db->count_all($this->_table);
    }

    public function listAllNews($record, $start)
    {
        $this->db->select("news_id,news_title,username,cate_title");
        $this->db->limit($record, $start);
        $this->db->join("user", "user.id=news.user_id");
        $this->db->join("cate_news", "cate_news.cate_id=news.cate_id");
        $this->db->order_by("news_id", "desc");
        return $this->db->get($this->_table)->result_array();
    }

    public function deleteNews($id)
    {
        $this->db->where("news_id", $id);
        $this->db->delete($this->_table);
    }

    public function getNewsById($id)
    {
        $this->db->where("id", $id);
        return $this->db->get($this->_table)->row_array();
    }

    public function updateNews($data, $id)
    {
        $this->db->where("id", $id);
        $this->db->update($this->_table, $data);
    }

    public function callNews()
    {
        $this->db->select("news_id,news_title,news_info,news_img");
        $this->db->order_by("news_id", "desc");
        $this->db->limit(7);
        return $this->db->get($this->_table)->result_array();
    }

    public function listOtherNews($id, $cate)
    {
        $this->db->select("news_id,cate_id,news_title");
        $this->db->where("news_id <", $id);
        $this->db->where("cate_id", $cate);
        $query = $this->db->get($this->_table);
        if ($query->num_rows() > 0) {
            return $query->result_array();
        } else {
            return false;
        }
    }

    public function getNewsByCateId($id)
    {
        $this->db->select("news_id,news_title,cate_title,news_img,news_info");
        $this->db->where("news.cate_id", $id);
        $this->db->join("cate_news", "cate_news.cate_id=news.cate_id");
        $query = $this->db->get($this->_table);
        if ($query->num_rows() > 0) {
            return $query->result_array();
        } else {
            return false;
        }
    }
}
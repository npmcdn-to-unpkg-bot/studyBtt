<?php

/**
 * Created by PhpStorm.
 * User: MSI
 * Date: 13-May-16
 * Time: 5:18 PM
 */
class ConnectDb extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
    }

    public function index()
    {
        $this->load->database();
        $query = $this->db->query("select * from user");
        $data = $query->result();
        echo "<pre>";
        var_dump($data);
        var_dump($query->num_rows());
    }

    public function index2()
    {
        $this->db->select("name, level");
        $this->db->order_by("name", "ASC");
        $this->db->limit(1,1);
        $query = $this->db->get("user");
        echo "<pre>";
        var_dump($query->result_array());
    }

    public function insert()
    {
        $data = array(
            'name' => "Lyly",
            'level' => "1"
        );

//        $this->db->insert("user", $data);
    }

    public function update()
    {
        $data = array(
            "name" => "Btt",
            "level" => "1"
        );

        $this->db->where("id", 1);
        $this->db->update("user", $data);
    }

    public function delete()
    {
        $this->db->where("id", 1);
        $this->db->delete("user");
    }
}
<?php

/**
 * Created by PhpStorm.
 * User: MSI
 * Date: 12-May-16
 * Time: 2:33 PM
 */
class Model_User extends Model
{
    protected $_table = "user";

    public function listAll()
    {
        $this->getData($this->_table);
        return $this->fetchAll();
    }

    public function deleteUser($id)
    {
        $this->where("id=".$id);
        $this->delete($this->_table);
    }
}
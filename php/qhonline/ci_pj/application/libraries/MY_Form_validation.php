<?php

/**
 * Created by PhpStorm.
 * User: Truong
 * Date: 26-May-16
 * Time: 11:23 PM
 */
class MY_Form_validation extends CI_Form_validation
{
    public $CI;

    public function is_unique($str, $field)
    {
        sscanf($field, '%[^.].%[^.]', $table, $field);
        $db = $this->CI->db;
        if (isset($db)) {
            if ($db->limit(1)->get_where($table, array($field => $str))->num_rows() === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}
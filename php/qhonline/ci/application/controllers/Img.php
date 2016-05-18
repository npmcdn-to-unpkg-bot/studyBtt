<?php
/**
 * Created by PhpStorm.
 * User: MSI
 * Date: 18-May-16
 * Time: 4:00 PM
 */

class Img extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->library("image_lib");
    }
}
<?php

/**
 * Created by PhpStorm.
 * User: Truong
 * Date: 26-May-16
 * Time: 9:52 PM
 */
class BTT_Library
{
    public function getConfigPagination()
    {
        $config['uri_segment'] = 3;
        $config['first_link'] = false;
        $config['last_link'] = false;
        $config['first_tag_open'] = '<li>';
        $config['first_tag_close'] = '</li>';
        $config['prev_link'] = '&laquo';
        $config['prev_tag_open'] = '<li class="prev">';
        $config['prev_tag_close'] = '</li>';
        $config['next_link'] = '&raquo';
        $config['next_tag_open'] = '<li>';
        $config['next_tag_close'] = '</li>';
        $config['last_tag_open'] = '<li>';
        $config['last_tag_close'] = '</li>';
        $config['cur_tag_open'] = '<li class="active"><a href="#">';
        $config['cur_tag_close'] = '</a></li>';
        $config['num_tag_open'] = '<li>';
        $config['num_tag_close'] = '</li>';
        return $config;
    }

    public function MyPagination($configCustom = array())
    {
        $config = $this->getConfigPagination();
        $config = array_merge($config, $configCustom);
        $CI =& get_instance();
        $CI->load->library('pagination', $config);
        return $CI->pagination->create_links();
    }
}
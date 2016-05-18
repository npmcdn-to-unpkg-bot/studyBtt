<?php

/**
 * Created by PhpStorm.
 * User: MSI
 * Date: 18-May-16
 * Time: 10:57 AM
 */
class Upload extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->helper(array("url", "form"));
    }

    public function index()
    {
        $this->load->view("upload/index_view", array("error"));
    }

    public function doupload()
    {
        if ($this->input->post("ok")) {
            $config['upload_path'] = './uploads/';
            $config['allowed_types'] = "gif|jpg|png";
            $config['max_size'] = '900';
            $config['max_width'] = '1920';
            $config['max_height'] = '1080';
            $config['file_name'] = time().'_'.md5($_FILES['img']['name']);

            $this->load->library("upload", $config);

            if ($this->upload->do_upload("img")) {
                echo "upload success";
                $image = $this->upload->data();
                echo "<pre>";
                var_dump($image);
                $this->load->library("image_lib");

                $config['image_library'] = "gd2";
                $config['source_image'] = './uploads/'.$image['file_name'];
//                resize anh
                $config['create_thumb'] = TRUE;
                $config['maintain_ratio'] = TRUE;
                $config['width']         = 150;
                $config['height']       = 120;
                $config['thumb_marker']       = 'thumb_';

                $this->image_lib->initialize($config);
                $this->image_lib->resize();
                $this->image_lib->clear();

                $config = array();
                $config['image_library'] = "gd2";
                $config['source_image'] = './uploads/'.$image['file_name'];
                $config['create_thumb'] = FALSE;
                //chèn text
                $config['wm_text'] = 'Copyright 2016 - Truongbt';
                $config['wm_type'] = 'overlay';
                $config['wm_overlay_path'] = './images/logo-white.png';
//                $config['wm_font_path'] = './system/fonts/texb.ttf';
//                $config['wm_font_size'] = '20';
//                $config['wm_font_color'] = 'ffffff';
                $config['wm_vrt_alignment'] = 'bottom';
                $config['wm_hor_alignment'] = 'center';
                $config['wm_padding'] = '-20';

                $this->image_lib->initialize($config);
                $this->image_lib->watermark();
            } else {
                $data['error'] = $this->upload->display_errors();
                $this->load->view("upload/index_view", $data);
            }
        }
    }

    public function excercise()
    {
        $this->load->view("upload/excersise_view");
    }
}
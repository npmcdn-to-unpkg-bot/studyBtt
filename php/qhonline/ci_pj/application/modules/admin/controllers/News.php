<?php

/**
 * Created by PhpStorm.
 * User: Truong
 * Date: 08-Jun-16
 * Time: 9:31 PM
 */
class News extends AdminController
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model(array("Mcategory", "Mnews"));
        $this->load->library(array("session"));
        $user = $this->session->userdata("username");
    }

    public function add()
    {
        $checkImage = true;
        $this->load->helper("menu");
        $this->_data['menu'] = $this->Mcategory->listAllCate(10, 0);
        $this->_data['titlePage'] = "Add a news";
        $this->_data['loadPage'] = "news/add_view";
        $this->load->library("form_validation");
        $this->form_validation->set_rules("title", "News title", "required");
        $this->form_validation->set_rules("author", "News author", "required");
        $this->form_validation->set_rules("shortDes", "News Info", "required");
        $this->form_validation->set_rules("content", "News Detail", "required");
        if ($this->form_validation->run() == true) {
            $dataInsert = array(
                "title" => $this->input->post("title"),
                "author" => $this->input->post("author"),
                "shortDes" => $this->input->post("shortDes"),
                "content" => $this->input->post("content"),
                "category" => $this->input->post("category"),
                "user_id" => $this->session->userdata("user_id"),
                "status" => $this->input->post("status"),
            );

            if ($_FILES['img']['name'] != "") {
                $config['upload_path'] = './'.Mnews::FOLDERUPLOAD.'/';
                $config['allowed_types'] = 'gif|jpg|png';
                $config['max_size'] = '6000';
                $config['max_width'] = '1024';
                $config['max_height'] = '768';
                $config['file_name'] = time() . '_' . md5($_FILES['img']['name']);
                $this->load->library('upload', $config);
                if ($this->upload->do_upload("img")) {
                    $image = $this->upload->data();

                    $this->load->library("image_lib");

                    $config['image_library'] = "gd2";
                    $config['source_image'] = './'.Mnews::FOLDERUPLOAD.'/'.$image['file_name'];
//                  resize anh
                    $config['create_thumb'] = TRUE;
                    $config['maintain_ratio'] = TRUE;
                    $config['width']         = 150;
                    $config['height']       = 120;
                    $config['thumb_marker']       = 'thumb_';

                    $this->image_lib->initialize($config);
                    $this->image_lib->resize();

                    $dataInsert['img'] = $image['file_name'];
                } else {
                    var_dump($this->upload->display_errors());
                    $this->_data['error'] = $this->upload->display_errors();
                    $checkImage = false;
                    $this->_data['data_form'] = $this->input->post();
                }
            }
            if ($checkImage == true) {
                $this->load->model("Mnews");
                $this->Mnews->updateNews($dataInsert);
                $this->session->set_flashdata('flash_mess', 'Added');
                redirect(base_url() . "admin/news");
            }
        } else {
            $this->_data['data_form'] = $this->input->post();
        }
        $this->load->view($this->_data['theme'], $this->_data);
    }

    public function edit($idNews)
    {
        $checkImage = true;
        $this->load->helper("menu");
        $this->_data['menu'] = $this->Mcategory->listAllCate(10, 0);
        $this->_data['titlePage'] = "Edit a news";
        $this->_data['loadPage'] = "news/edit_view";
        $this->_data['data_form'] = $this->Mnews->getNewsById($idNews);
        if ($this->_data['data_form'] == null) {
            $this->session->set_flashdata('flash_error', "The news with id : " . $idNews . " doesn't exist");
            redirect(base_url() . "admin/user");
        }

        $this->load->library("form_validation");
        $this->form_validation->set_rules("title", "News title", "required");
        $this->form_validation->set_rules("author", "News author", "required");
        $this->form_validation->set_rules("shortDes", "News Info", "required");
        $this->form_validation->set_rules("content", "News Detail", "required");
        if ($this->form_validation->run() == true) {
            $dataInsert = array(
                "title" => $this->input->post("title"),
                "author" => $this->input->post("author"),
                "shortDes" => $this->input->post("shortDes"),
                "content" => $this->input->post("content"),
                "category" => $this->input->post("category"),
                "user_id" => $this->session->userdata("user_id"),
                "status" => $this->input->post("status"),
            );

            if ($_FILES['img']['name'] != "") {
                $config['upload_path'] = './uploads/news/';
                $config['allowed_types'] = 'gif|jpg|png';
                $config['max_size'] = '6000';
                $config['max_width'] = '1024';
                $config['max_height'] = '768';
                $config['file_name'] = time() . '_' . md5($_FILES['img']['name']);
                $this->load->library('upload', $config);
                if ($this->upload->do_upload("img")) {
                    $image = $this->upload->data();

                    $this->load->library("image_lib");

                    $config['image_library'] = "gd2";
                    $config['source_image'] = './'.Mnews::FOLDERUPLOAD.'/'.$image['file_name'];
//                  resize anh
                    $config['create_thumb'] = TRUE;
                    $config['maintain_ratio'] = TRUE;
                    $config['width']         = 150;
                    $config['height']       = 120;
                    $config['thumb_marker']       = 'thumb_';

                    $this->image_lib->initialize($config);
                    $this->image_lib->resize();

                    $dataInsert['img'] = $image['file_name'];
                } else {
                    var_dump($this->upload->display_errors());
                    $this->_data['error'] = $this->upload->display_errors();
                    $checkImage = false;
                }
            }
            if ($checkImage == true) {
                $this->load->model("Mnews");
                $this->Mnews->updateNews($dataInsert, $idNews);
                $this->session->set_flashdata('flash_mess', 'Added');
                redirect(base_url() . "admin/news");
            }
        }
        $this->load->view($this->_data['theme'], $this->_data);
    }
}
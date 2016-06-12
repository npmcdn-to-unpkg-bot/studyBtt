<?php

/**
 * Created by PhpStorm.
 * User: Truong
 * Date: 04-Jun-16
 * Time: 10:42 PM
 */
class Category extends AdminController
{
    protected $_data;

    public function __construct()
    {
        parent::__construct();
        $this->load->model(array("Mcategory"));
        $this->load->library(array("session"));
    }

    public function index()
    {
        $this->load->library("BTT_Library");
        $this->_data['titlePage'] = "Category Management";
        $config['base_url'] = base_url() . 'admin/category/index';
        $config['total_rows'] = $this->Mcategory->countAll();
        $config['per_page'] = PAGINATION_PER_PAGE;
        $config['uri_segment'] = 4;

        $start = $this->uri->segment(4);
        $this->_data['loadPage'] = "category/index_view";
        $this->_data['listCate'] = $this->Mcategory->listAllCate(PAGINATION_PER_PAGE, $start);
        $this->_data['pageLink'] = $this->btt_library->MyPagination($config);
        $this->_data['controller'] = $this;

        $this->load->view($this->_data['theme'], $this->_data);
    }

    public function add()
    {
        $this->load->library("form_validation");
        if ($this->input->post("add")) {
            // phải khai báo cái này thì mới dùng được MY_Form_Validation
            $this->form_validation->CI =& $this;
            $this->form_validation->set_rules("name", "name", "required|min_length[4]");

            if ($this->form_validation->run()) {
                $dataInsert = array(
                    'name' => $this->input->post("name"),
                    'parent' => $this->input->post("parent"),
                    'status' => $this->input->post("status"),
                );
                $this->Mcategory->insertCate($dataInsert);
                $this->session->set_flashdata("flash_success", "Insert category success");
                redirect(base_url() . "admin/category");
            } else {
                $this->_data['data_form'] = $this->input->post();
            }
        }
        $this->_data['titlePage'] = "Add New Category";
        $this->_data['loadPage'] = "category/add_view";

        $this->load->view($this->_data['theme'], $this->_data);
    }

    public function edit($idCate)
    {
        $this->load->library("form_validation");
        $this->_data['data_form'] = $cate = $this->Mcategory->getCateById($idCate);
        if (!$cate) {
            $this->session->set_flashdata("flash_error", "Category is not exist");
            redirect(base_url() . "admin/category");
        }

        if ($this->input->post("add")) {
            // phải khai báo cái này thì mới dùng được MY_Form_Validation
            $this->form_validation->CI =& $this;
            $this->form_validation->set_rules("name", "name", "required|min_length[4]");

            if ($this->form_validation->run()) {
                $dataInsert = array(
                    'name' => $this->input->post("name"),
                    'parent' => $this->input->post("parent"),
                    'status' => $this->input->post("status"),
                );
                $this->Mcategory->updateCate($dataInsert, $cate['id']);
                $this->session->set_flashdata("flash_success", "Update category success");
                redirect(base_url() . "admin/category");
            } else {
                $this->_data['data_form'] = $this->input->post();
            }
        }
        $this->_data['titlePage'] = "Edit Category";
        $this->_data['loadPage'] = "category/edit_view";

        $this->load->view($this->_data['theme'], $this->_data);
    }
}
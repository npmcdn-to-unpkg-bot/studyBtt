<?php
/**
 * Created by PhpStorm.
 * User: MSI
 * Date: 17-May-16
 * Time: 10:05 AM
 */

class Pagination extends CI_Controller
{
    protected $_data;
    public function __construct()
    {
        parent::__construct();
        $this->load->helper("url");
    }

    public function index()
    {
        $this->load->model("Muser");
        $config['total_rows'] = $this->Muser->getTotal();
        $config['base_url'] = base_url()."index.php/Pagination/index";
        $config['per_page'] = 2;
        $config['num_links'] = 1;

        //config for bootstrap pagination class integration
        $config['full_tag_open'] = '<ul class="pagination">';
        $config['full_tag_close'] = '</ul>';
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
        $this->load->library("pagination", $config);

        //nếu phân trang ở trong 1 module : domain/index.php/module/controller/action/??? thì phải set lại biết $start và $config['uri_segment'] = 4
        // số 3 là vị trí trên url tính từ controller : domain/index.php/controller/action/???
        $start = $this->uri->segment(3);
        $this->_data['data'] = $this->Muser->listUserPagination(PER_PAGE, $start);
        $this->load->view("user/list_view", $this->_data);
    }
}
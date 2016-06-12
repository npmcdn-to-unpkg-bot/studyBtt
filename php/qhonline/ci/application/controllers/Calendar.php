<?php
/**
 * Created by PhpStorm.
 * User: MSI
 * Date: 18-May-16
 * Time: 4:54 PM
 */
class Calendar extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        $this->load->helper("url");
//        $this->load->library("calendar");
//        $data = array(
//            3  => 'http://example.com/news/article/2006/06/03/',
//            7  => 'http://example.com/news/article/2006/06/07/',
//            13 => 'http://example.com/news/article/2006/06/13/',
//            26 => 'http://example.com/news/article/2006/06/26/'
//        );
//
//        echo $this->calendar->generate(2006, 6, $data);

        $prefs = array(
            'show_next_prev'  => TRUE,
            'next_prev_url'   => base_url().'index.php/calendar/index'
        );

        $event = array(
            "2016-05-11" => "http://google.com",
            "10" => "http://dantri.com"
        );

        $this->load->library('calendar', $prefs);

        echo $this->calendar->generate($this->uri->segment(3), $this->uri->segment(4), $event);
    }
}
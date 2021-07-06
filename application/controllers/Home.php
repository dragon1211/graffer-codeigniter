<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Home extends CI_Controller {

	 function __construct() {
        parent::__construct();
        $this->load->model('general_model');
        $this->load->library('google');
		$this->load->helper('url');
		$this->load->library('session');

    }

	public function index(){
		$this->load->view('home/header');
		$this->load->view('home/home');
		$this->load->view('home/footer');
	}
}
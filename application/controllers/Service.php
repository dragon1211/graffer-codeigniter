<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Service extends CI_Controller {

	 function __construct() {
        parent::__construct();
		$this->load->helper('url');
    }

	public function index(){
		$this->load->view('service/header');
		$this->load->view('service/first');
		$this->load->view('service/footer');
	}
	
    public function login(){

    }
}
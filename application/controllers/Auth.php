<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Auth extends CI_Controller {

	 function __construct() {
        parent::__construct();
        $this->load->model('general_model');
        $this->load->library('google');
		$this->load->helper('url');
        $this->load->library(array('session'));
		
    }

	public function index(){
		
		$data['google_login_url']=$this->google->get_login_url(); //get google url
		// $this->load->view('home_view',$data);
		$this->load->view('auth/header');
		$this->load->view('auth/login',$data);
		$this->load->view('auth/footer');
	}
	public function warning(){
	
		$data['google_login_url']=$this->google->get_login_url(); //get google url
		$this->load->view('auth/header', $data);
		$this->load->view('auth/wrong-pwd',$data);
		$this->load->view('auth/footer',$data);
	}
	public function temp(){
		
		$this->load->view('auth/header');
		$this->load->view('auth/temp-signup');
		$this->load->view('auth/footer');
	}

	public function signup(){

		$data['google_login_url']=$this->google->get_login_url(); //get google url
		$this->load->view('auth/header');
		$this->load->view('auth/signup',$data);
		$this->load->view('auth/footer');
	}

	public function logout(){
		session_destroy();
		unset($_SESSION['access_token']);
		$session_data=array(
				'logged_in'=>0
				);
		$this->session->set_userdata($session_data);
		redirect(base_url());
	}
}
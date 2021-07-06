<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class AuthGoogleCtrl extends CI_Controller {

	 function __construct() {
        parent::__construct();
        $this->load->model('general_model');
        $this->load->library('google');
		$this->load->helper('url');
        $this->load->library('session');
    }

	public function oauth2callback(){
        $this->session->set_userdata('logged_in', true); 
        $this->session->set_userdata('is_confirmed', false);
        redirect(base_url());
	}
}
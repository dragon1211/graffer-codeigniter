<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class AuthGoogleCtrl extends CI_Controller {

	 function __construct() {
        parent::__construct();
        $this->load->model('general_model');
        $this->load->library('google');
		$this->load->helper('url');
    }

	public function oauth2callback(){
		// $google_data = $this->google->validate();
	
		echo '<pre>'; print_r($this->$google); echo '</pre>';
		
		// 
		// $user=$this->general_model->GetAllInfo('user','id',array('email'=>$google_data['email'],'source'=>'google'));
		// if(count($user)>0){
		// 	$session_data=array(
		// 		'name'=>$google_data['name'],
		// 		'email'=>$google_data['email'],
		// 		'source'=>'google',
		// 		'profile_pic'=>$google_data['profile_pic'],
		// 		'link'=>$google_data['link'],
		// 		'sess_logged_in'=>1
		// 		);
		// 	$this->session->set_userdata($session_data);
			
		// }else{
			
		// 	$session_data=array(
		// 		'name'=>$google_data['name'],
		// 		'email'=>$google_data['email'],
		// 		'source'=>'google',
		// 		'profile_pic'=>$google_data['profile_pic'],
		// 		'link'=>$google_data['link'],
		// 		'sess_logged_in'=>1
		// 		);
		// 	$this->session->set_userdata($session_data);
		// }
		
		// redirect(base_url());

	}
}
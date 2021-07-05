<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class AuthGoogleCtrl extends CI_Controller {

	 function __construct() {
        parent::__construct();
        $this->load->model('general_model');
        $this->load->library('google');
		$this->load->helper('url');
    }

	public function oauth2callback(){

		// if($this->session->userdata('loggedIn') == true){ 
        //     redirect('user_authentication/profile/'); 
        // } 
         
        if(isset($_GET['code'])){ 
             
             /* Authenticate user with google */
            if($this->google->getAuthenticate()){ 
             
                 /* Get user info from google */
                $gpInfo = $this->google->getUserInfo(); 
                 
                 /* Preparing data for database insertion */
                $userData['oauth_provider'] = 'google'; 
                $userData['oauth_uid']         = $gpInfo['id']; 
                $userData['first_name']     = $gpInfo['given_name']; 
                $userData['last_name']         = $gpInfo['family_name']; 
                $userData['email']             = $gpInfo['email']; 
                $userData['gender']         = !empty($gpInfo['gender'])?$gpInfo['gender']:''; 
                $userData['locale']         = !empty($gpInfo['locale'])?$gpInfo['locale']:''; 
                $userData['picture']         = !empty($gpInfo['picture'])?$gpInfo['picture']:''; 
                 
                 /* Insert or update user data to the database  */
                $userID = $this->user->checkUser($userData); 
                 
                 /* Store the status and user profile info into session */
                $this->session->set_userdata('loggedIn', true); 
                $this->session->set_userdata('userData', $userData); 
                 
                 /* Redirect to profile page */
                redirect('user_authentication/profile/'); 
            } 
        }  
         
         /* Google authentication url */
        $data['loginURL'] = $this->google->loginURL(); 
         
         /* Load google login view */
        $this->load->view('user_authentication/index',$data); 
		// echo "success google login";

		//  $google_data = $this->google->validate();
	
		// echo '<pre>'; print_r($this->$google); echo '</pre>';
		
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
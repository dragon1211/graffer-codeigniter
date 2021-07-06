<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class AuthGrafferCtrl extends CI_Controller {

    private $verifiCode = '';

	function __construct() {
        parent::__construct();
        $this->load->library('email');
		$this->load->helper('url');
		$this->load->helper('form');
		$this->load->library('form_validation');      
        $this->load->library(array('session'));
        $this->load->model('user_model');
    }

	public function index(){
		// set validation rules

		$this->form_validation->set_rules('lastName', 'Lastname', 'trim|required');
        $this->form_validation->set_rules('firstName', 'Firstname', 'trim|required');
		$this->form_validation->set_rules('email', 'Email', 'trim|required|valid_email');
		$this->form_validation->set_rules('password', 'Password', 'trim|required|min_length[6]');

		if ($this->form_validation->run() === false) {
			
			// validation not ok, send validation errors to the view
            echo 'info is not correct';

	    } else {
            $username = '';
            $username .= $this->input->post('lastName');
            $username .= $this->input->post('firstName');
			$email    = $this->input->post('email');
			$password = $this->input->post('password');

            $newSession = array(
                'username'  => $username,
                'email'     => $email,
                'password'  => $password
            );
        
            $this->session->set_userdata($newSession);

            $this->load->library('verification');
            $this->verifiCode = $this->verification->generateVerifiCode($password);
            
            $this->load->library('Smtp_Email');
            $this->load->helper('Site_Info');

            $from = getSiteName();
            $this->smtp_email->sendEmail( $from, $email, $username, $this->verifiCode );
            $this->load->view('auth/verify', array('index' => $email));
        }
    }

    public function checkCode() {
        $code = $this->input->post('verifyCode');
        
        if($code == $this->verifiCode && $code != NULL )
        {
            $this->load->view('welcome_message');
            
            $user = $this->session->userdata('username');
            $email = $this->session->userdata('email');
            $password = $this->session->userdata('password');

            if ($this->user_model->create_user($user, $email, $password)) {
                    
                // user creation ok
                echo 'regist success!';
            } else {
                
                // user creation failed, this should never happen
                $data->error = 'There was a problem creating your new account. Please try again.';         
                echo $data->error;
            }
        } else {
            echo "invalid code";
        }

        $user = $this->session->userdata('username');
        $email = $this->session->userdata('email');
        $password = $this->session->userdata('password');

        if ($this->user_model->create_user($user, $email, $password)) {
                
            // user creation ok
            echo 'regist success!';
        } else {
            
            // user creation failed, this should never happen
            $data->error = 'There was a problem creating your new account. Please try again.';         
            echo $data->error;
        }
    }

    public function login() {
        $this->form_validation->set_rules('email', 'Email', 'trim|required|valid_email');
		$this->form_validation->set_rules('password', 'Password', 'trim|required|min_length[6]');

		if ($this->form_validation->run() == false) {
			
			// validation not ok, send validation errors to the view
			// $this->load->view('header');
			// $this->load->view('user/login/login');
			// $this->load->view('footer');
            echo 'login failed';
			
		} else {
			
			// set variables from the form
			$email = $this->input->post('email');
			$password = $this->input->post('password');
			
			if ($this->user_model->resolve_user_login($email, $password)) {
				
				$user_id = $this->user_model->get_user_id_from_email($email);
				$user    = $this->user_model->get_user($user_id);
				
				// set session user datas
				
                $sessionArr = array(
                    'user_id' => (int)$user->id,
                    'username' => (string)$user->username,
                    'logged_in' => (bool)true,
                    'is_confirmed' => (bool)$user->is_confirmed,
                    'is_admin' => (bool)$user->is_admin
                );

                $this->session->set_userdata($sessionArr);

				// user login ok
				// $this->load->view('header');
				// $this->load->view('user/login/login_success', $data);
				// $this->load->view('footer');
                echo 'login sussess';
				
			} else {
				// login failed
				$data->error = 'Wrong username or password.';
				// send error to the view
				// $this->load->view('header');
				// $this->load->view('user/login/login', $data);
				// $this->load->view('footer');
				echo $data->error;
			}
        }
    }
}
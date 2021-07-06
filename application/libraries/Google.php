<?php 
require_once('Google/autoload.php');

class Google {
	protected $CI;

	public function __construct(){
		$this->CI =& get_instance();
        $this->CI->load->library('session');
		$this->CI->load->helper('url');
        // $this->CI->config->load('google_config');
        $this->client = new Google_Client();
		$this->client->setClientId('921961180516-6i1qmk058ke6lld8ve3jc2pnrsm7busq.apps.googleusercontent.com');
		$this->client->setClientSecret('BUWsOw8DCJ35FtD3PGigDOGZ');
		$this->client->setRedirectUri(base_url('/auth/oauth2callback'));
		$this->client->setScopes(array(
			"https://www.googleapis.com/auth/plus.login",
			"https://www.googleapis.com/auth/plus.me",
			"https://www.googleapis.com/auth/userinfo.email",
			"https://www.googleapis.com/auth/userinfo.profile"
			)
		);
	}

	public function get_login_url(){
		return  $this->client->createAuthUrl();
	}

	public function validate(){		
		if (isset($_GET['code'])) {
		  $this->client->authenticate($_GET['code']);
		  $_SESSION['access_token'] = $this->client->getAccessToken();
		}
		if (isset($_SESSION['access_token']) && $_SESSION['access_token']) {
		  $this->client->setAccessToken($_SESSION['access_token']);
		  $plus = new Google_Service_Plus($this->client);
			$person = $plus->people->get('me');
			$info['id']=$person['id'];
			$info['email']=$person['emails'][0]['value'];
			$info['name']=$person['displayName'];
			$info['link']=$person['url'];
			$info['profile_pic']=substr($person['image']['url'],0,strpos($person['image']['url'],"?sz=50")) . '?sz=800';
		   return  $info;
		}


	}

}
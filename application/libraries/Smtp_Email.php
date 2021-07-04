<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Smtp_Email {

	public function __construct() {
		$this->CI = get_instance();

        $this->CI->load->helper('html');
	}

	public function sendEmail( $from, $to, $user, $msg)
	{
		// $this->load->view('welcome_message');
        $this->CI->load->library('email');
		
		$subject = $user;
		$message = '
			<p>This message has been sent for testing purposes.</p>

			<!-- Attaching an image example - an inline logo. -->
			<p><img src="cid:logo_src" /></p>
            <p>Your verification code is'.$msg.'</p>
		';

		// Get full html:
		$body = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
		<html xmlns="http://www.w3.org/1999/xhtml">
		<head>
			<meta http-equiv="Content-Type" content="text/html; charset=' . strtolower(config_item('charset')) . '" />
			<title>' . html_escape($subject) . '</title>
			<style type="text/css">
				body {
					font-family: Arial, Verdana, Helvetica, sans-serif;
					font-size: 16px;
				}
			</style>
		</head>
		<body>
		' . $message . '
		</body>
		</html>';
		
	
		$result = $this->CI->email
			->from($from)  // Optional, an account where a human being reads.
			->to($to)
			->subject($subject)
			->message($body)
			->send();

		var_dump($result);
		echo '<br />';
		echo $this->CI->email->print_debugger();
	}
}

<?php defined('BASEPATH') OR exit('No direct script access allowed.');

class Verification {

    public function __construct() {

    }

    public function generateVerifiCode($password) {
        $now = date("h:i:sa");
        $verificationCode = '';
        $verificationCode .= $password;
        $verificationCode .= $now;
        
        return md5($verificationCode);
    }
}
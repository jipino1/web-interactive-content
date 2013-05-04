<?php
	if(isset($_POST['submit'])){
		$pwd = $_POST['password'];	
		echo 'the password is: ' . $pwd;
	}else{
		echo 'pailas';
	}
	
	
?>
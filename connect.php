<?php


if((isset($_POST['name']) && !empty($_POST['name']))
&& (isset($_POST['email']) && !empty($_POST['email']))
&& (isset($_POST['sujet']) && !empty($_POST['sujet']))
&& (isset($_POST['message']) && !empty($_POST['message']))){

    //print_r($_POST);
	$name = $_POST['name'];
	$email = $_POST['email'];
    $sujet = $_POST['sujet'];
	$message = $_POST['message'];
	
	$to = "keumaleucedrick@gmail.com";
	$headers = "From : " . $email;
	
	if( mail($to, $subject, $message, $headers)){
		echo "E-Mail Sent successfully, we will get back to you soon.";
		
		$query = "INSERT INTO `contact` (name, email, sujet, message  ) VALUES ('$name', '$Email', '$sujet','$message')";
		$result = mysqli_query($connection, $query);
	}
}

?>
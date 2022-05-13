<?php
include('connexion.php');
/* Traitement de l'envoi de l'email */

// echo'test';

$errors = '';
$myemail = 'keumaleucedrick@gmail.com';
if(
   
    empty($_POST['name'])||
    empty($_POST['email'])||
    empty($_POST['sujet'])||
    empty($_POST['message']))
    {
    $errors .="\n error: all fields are required";
}


// on stock ici les chams du formulaire dans des variables (name...)


$name = $_POST['name'];
$email = $_POST['email'];
$sujet = $_POST['sujet'];
$message = $_POST['message'];



 if(empty($errors))
 {
    $query = "INSERT INTO `reservation` (name, email, sujet, message) VALUES ('$name', '$email', '$sujet', '$message')";
    
   

//     var_dump($query);
// die();
   
    $result = mysqli_query($connection, $query);


    $to = "keumaleucedrick@gmail.com";
	$headers = "From : " . $email;
   

    // $messageMail = "message : ".$message;

	
	mail($to, $name ,$email, $sujet, $messageMail, $headers);


    
    header('Location: html/accueil.html?mail=ok');
 



}

?>


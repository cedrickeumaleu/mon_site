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


// on stock iciles chams du formulaire dans des variables (name...)


$name = $_POST['name'];
$email = $_POST['email'];
$sujet = $_POST['sujet'];
$message = $_POST['message'];



 if(empty($errors))
 {
    $query = "INSERT INTO `reservation` (name, email, sujet, message) VALUES ('$name', '$email', '$sujet', '$message')";
    //$sql = "INSERT INTO `reservation` (Nom, Prenom, Téléphone, email, Date_entre, Date_sortie, Adulte, Enfants, Type_de_chambre, msg ) VALUES ( \'kam\', \'jojo\', \'0755612575\', \'keumaleucedrick@gmail.com\', \'01/05/2020\', \'20/05/2021\', \'2\', \'3\', \'Chambre VIP\', \'test\')";
   

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
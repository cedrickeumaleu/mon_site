<?php
$connection = mysqli_connect('localhost', 'cedrickk', '4Hfe1I4H1S7oug==', 'cedrickk_mon_site');
if (!$connection){
    die("Database Connection Failed" . mysqli_error($connection));
}
$select_db = mysqli_select_db($connection, 'cedrickk_mon_site');
if (!$select_db){
    die("Database Selection Failed" . mysqli_error($connection));
}


?>
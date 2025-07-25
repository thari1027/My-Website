<?php
include "db.php";

$fullname = $_POST['fullname'];
$number=$_POST['number'];
$email=$_POST['email'];
$message=$_POST['message'];

$sql = "INSERT INTO users (fullname, number, email, message) VALUES ('$fullname', '$number', '$email', '$message')";

if($conn->query($sql) === TRUE){
    echo "Thank You";

}
else{
    echo "Error:".$conn->error;
}
$conn->close();
?>

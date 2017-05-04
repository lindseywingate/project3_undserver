<?php
//This script logs in the users of the Roomfor website
$user = $_POST['username'];
$pass = $_POST['password'];

//	$user = trim($_POST['username']);
//	$user = strip_tags($user);
//	$user = htmlspecialchars($user);

$username="lindseywingate";
$password="password";
$host="mysqldev.aero.und.edu";
$conn=mysql_connect($host, $username, $password);

if($conn) {
	mysql_select_db("lindseywingate", $conn);
	$query = "SELECT * from users WHERE username='$user' AND password='$pass'";
	$result = mysql_query($query, $conn);
	$num = mysql_numrows($result);
	if($num) {
		mysql_close($conn);
		header("Location: http://people.aero.und.edu/~lwingate/457/3/home.html");	
		exit();
	}
}
else {
	die('Could not connect to MySQL: ' .mysql_error());
	mysql_close($conn);
}

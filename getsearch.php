<?php
<<<<<<< HEAD
$data = "Lake Agassiz Park";
=======
//$data = $_POST["action"];
$data = 'testing2';
>>>>>>> 54f4d1ca56945148c75896119fdad4c323556db3

$username = "lindseywingate";
$password = "password";
$host = "mysqldev.aero.und.edu";
$conn = mysql_connect($host, $username, $password);

if($conn) {
	mysql_select_db("lindseywingate, $conn");
<<<<<<< HEAD
	$query = "SELECT coords from places WHERE name = '$data'";
=======
	$query = "SELECT latitude, longitude from places WHERE name = '$data'";
>>>>>>> 54f4d1ca56945148c75896119fdad4c323556db3
	$result = mysql_query($query, $conn);
	$num = mysql_numrows($result);
		print $num;
//	while($row=mysql_fetch_assoc($result)) {
//		print $row['latitude'];
//		print $row['longitude'];
//	}

}

?>

<?php
$data = $_POST["localsearch"];

$username = "lindseywingate";
$password = "password";
$host = "mysqldev.aero.und.edu";
$conn = mysql_connect($host, $username, $password);

if($conn) {
	mysql_select_db("lindseywingate, $conn");
	query = "SELECT coords from places WHERE name = '$data'";
	$result = mysql_query($query, $conn);
	$num = mysql_numrows($result);
	if($num) {
		mysql_close($conn);
		//send data back to js to relocate map!
	}
}

echo $data;

?>

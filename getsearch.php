<?php
if(isset($_POST["place"])) {
	$data = $_POST["place"];
	$username = "lindseywingate";
	$password = "password";
	$host = "mysqldev.aero.und.edu";
	$conn = mysql_connect($host, $username, $password);

	if($conn) {
		mysql_select_db("lindseywingate", $conn);
		$query = "SELECT latitude, longitude from places WHERE name = '$data'";

		$result = mysql_query($query, $conn) or die(mysql_error());
		$num = mysql_numrows($result);
			print $num;
		while($row=mysql_fetch_assoc($result)) {
			print $row['latitude'];
			print $row['longitude'];
		}
		return $row;
	}
}
else {
	return "This didn't work.";
}
?>

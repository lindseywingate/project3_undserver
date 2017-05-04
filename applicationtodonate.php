<?php

//This php file records information people register on the website and adds it to the application database

if(isset($_POST['rooms'])) {
	$rooms = $_POST['rooms'];
	for($i=0; $i<count($rooms); $i++) {
		echo $rooms[$i]."<br />";
	}
	echo $_POST['bedrooms'];
	echo $_POST['nummasterbedrooms'];
	echo $_POST['nummasterbathrooms'];
	echo $_POST['numaptbedrooms'];
	echo $_POST['numaptbathrooms'];
	echo $_POST['numhousebedrooms'];
	echo $_POST['numhousebathrooms'];
}


?>

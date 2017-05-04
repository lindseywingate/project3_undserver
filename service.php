<?php
//This script redirects people from the start page to the page they need
if($_POST['redirect']=='map.html') {
	header("Location: http://aero.und.edu/~lwingate/457/3/map.html");
	exit();
}
if($_POST['redirect']=='donatespace.html') {
	header("Location: http://aero.und.edu/~lwingate/457/3/donatespace.html");
	exit();
}

?>

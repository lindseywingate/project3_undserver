<?php
	$singlebedrooms = $_POST['bedrooms'];
	$masterbedrooms = $_POST['nummasterbedrooms'];
	$aptbedrooms =  $_POST['numaptbedrooms'];
	$aptbathrooms =  $_POST['numaptbathrooms'];
	$housebedrooms =  $_POST['numhousebedrooms'];
	$housebathrooms = $_POST['numhousebathrooms'];
	$numapts = $_POST['numapts'];
	$numhouses = $_POST['numhouses'];
	$name = $_POST['name'];
	$email =  $_POST['email'];
	$phone =  $_POST['phonenum'];
//This php file records information people register on the website and adds it to the application database
echo "
<html>
<head>
	<script type='text/javascript' src='//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js'></script>
	<script src='js/applicationtodonate.js' type='text/javascript'></script>
	<link href='css/applicationtodonate.css' type='text/css' rel='stylesheet'>
</head>

<body>
	<h1>Confirmation</h1>
	<div id='text_stuff'>
		<div id='replaceme'>
		<p>You applied with the following information: <br><br>
			$singlebedrooms Single bedroom(s) <br><br>
			$masterbedrooms Bedrooms with bathrooms connected <br><br>
			$numapts apartment(s) with $aptbedrooms bedroom(s) and $aptbathrooms bathroom(s) <br><br>
			$numhouses house(s) with $housebedrooms bedroom(s) and $housebathrooms bathroom(s) <br><br>
			Name: $name<br>
			Email: $email<br>
			Phone: $phone<br>
		</div>
		<p>Is this correct?</p>
		<button type='button' onclick='enter()'>Yes</button>
		<button type='button' onclick='pleasechangeinfo()'>No, I want to try again</button>
		<div id='changeinfo'>
		</div>
	</div>

</body>
</html>
";

?>

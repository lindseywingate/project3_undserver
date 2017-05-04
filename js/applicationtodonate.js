/*This script moves stuff around on the app.php page*/

function pleasechangeinfo() {
	var xmlhttp;	
	if(window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	}   
	else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}   
	xmlhttp.onreadystatechange = function () {
		if((xmlhttp.readyState==4) && (xmlhttp.status==200)) {
			document.getElementById("changeinfo").innerHTML=xmlhttp.responseText;
		}   
	}   
	xmlhttp.open("GET", "js/pleasechange.txt", true);
	xmlhttp.send();
	window.location.href=("http://people.aero.und.edu/~lwingate/457/3/donatespace.html");
}


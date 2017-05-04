/*This is the js file for the donatespace html page*/

$(document).ready(function() {
	$('#bedrooms').hide();
	$('#masterbeds').hide();
	$('#aptrooms').hide();
	$('#houserooms').hide();

	$('#bedroom').on('click', function() {
		$('#bedrooms').toggle();
	});
	$('#masterbed').on('click', function() {
		$('#masterbeds').toggle();
	});
	$('#apartment').on('click', function() {
		$('#aptrooms').toggle();
	});
	$('#house').on('click', function() {
		$('#houserooms').toggle();
	});
});

/*
function bedrooms() {
	if(document.getElementById("bedroom").checked) {
		var xmlhttp;	
		if(window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		}   
		else {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}   
		xmlhttp.onreadystatechange = function () {
			if((xmlhttp.readyState==4) && (xmlhttp.status==200)) {
				document.getElementById("bedrooms").innerHTML=xmlhttp.responseText;
			}   
		}   
		xmlhttp.open("GET", "js/bedrooms.txt", true);
		xmlhttp.send();
	}
	else {
		document.getElementById("bedrooms").innerHTML="";
	}
}

function bedroomsandbathrooms() {
	if(document.getElementById("masterbed").checked) {
		var xmlhttp;	
		if(window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		}   
		else {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}   
		xmlhttp.onreadystatechange = function () {
			if((xmlhttp.readyState==4) && (xmlhttp.status==200)) {
				document.getElementById("masterbeds").innerHTML=xmlhttp.responseText;
			}   
		}   
		xmlhttp.open("GET", "js/bedrooms.txt", true);
		xmlhttp.send();
	}
	else {
		document.getElementById("masterbeds").innerHTML="";
	}
}

function aptbedrooms() {
	if(document.getElementById("apartment").checked) {
		var xmlhttp;	
		if(window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		}   
		else {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}   
		xmlhttp.onreadystatechange = function () {
			if((xmlhttp.readyState==4) && (xmlhttp.status==200)) {
				document.getElementById("aptrooms").innerHTML=xmlhttp.responseText;
			}   
		}   
		xmlhttp.open("GET", "js/roomavailability.txt", true);
		xmlhttp.send();
	}
	else {
		document.getElementById("aptrooms").innerHTML="";
	}
}

function housebedrooms() {
	if(document.getElementById("house").checked) {
		var xmlhttp;	
		if(window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		}   
		else {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}   
		xmlhttp.onreadystatechange = function () {
			if((xmlhttp.readyState==4) && (xmlhttp.status==200)) {
				document.getElementById("houserooms").innerHTML=xmlhttp.responseText;
			}   
		}   
		xmlhttp.open("GET", "js/roomavailability.txt", true);
		xmlhttp.send();
	}
	else {
		document.getElementById("houserooms").innerHTML="";
	}
}*/

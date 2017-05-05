/*This is the js file for the index.html page*/
var im = 'http://www.robotwoods.com/dev/misc/bluecircle.png';
var home = 'http://www.iconhot.com/icon/png/token-dark/48/home-92.png';

function localsearch() {
	var xhttp;
	var streetsearch = new FormData(document.getElementById("tags"));
	if(window.XMLHttpRequest) {
		xhttp = new XMLHttpRequest();
	} 
	else {
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xhttp.open('get', 'getsearch.php', true);
	xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhttp.send(streetsearch);

	xhttp.onreadystatechange = function() {
		if(xhttp.status===200) {
			console.log(xhttp.responseText);	
			setlocation($xhttp.responseText);	
		}
		else {
			console.log('Error: '+xhttp.status);
		}
	};
}

/*This function resets the map view based on the user input*/
function setlocation(coords) {
	//split coords to variables
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;
	var position = new google.maps.LatLng(lat, lon);
	var mapOptions = {
		zoom: 16,
		center: position,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	}
	var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
	var userMarker = new google.maps.Marker({
		position: position,
		map: map,
		icon: im,	
		title: "You are here!"
	});
}

function getlocation() {
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(initialize, showError);
	}
	else {
		console.log("Your browser does not support Geolocation.");
	}
}

function showError() {
	alert("Geolocation (the map application) does not work on insecure sites.");
}

function initialize(position) {
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;
	var position = new google.maps.LatLng(lat, lon);
	var mapOptions = {
		zoom: 16,
		center: position,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	}

	var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
	var userMarker = new google.maps.Marker({
		position: position,
		map: map,
		icon: home,	
		title: "You are here!"
	});
	userMarker.addListener('click', function () {
		document.getElementById("description").innerHTML = "This is your current location.";		
	});	
}

$(function() {
	var availableTags = [
		"Ralph Engelstad Arena",
		"University Park",
		"Lake Agassiz Park",
		"Home of Economy",
		"Chester Fritz Auditorium",
		"Alerus Center",
		"Valley Golf Course"		
	];
	$('#tags').autocomplete({
		source: availableTags
	});
});



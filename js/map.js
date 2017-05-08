/*This is the js file for the index.html page*/
var home = "http://www.iconhot.com/icon/png/token-dark/48/home-92.png";

$(document).ready(function() {
	$("#localsearch").click(function() {
		var place = ($("#tags").val());
		var data = {
			place:place
		}
		$.ajax({
			type: "POST",
			url: "getsearch.php",
			data: data,
			success: function(response) {
				var results = response;
				console.log(results);
				setlocation(results);
			},
			error: function(xhr, status, error) {
				console.log(error);
			}
		});	

	});
});

/*This function resets the map view based on the user input*/
function setlocation(coords) {
	//split coords to variables
	var res = coords.split("-");
	console.log(res);	
	var lat = res[0]; 
	var lon = res[1];
	var position = new google.maps.LatLng(lat, lon);
	var mapOptions = {
		zoom: 16,
		center: position,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	}
	var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
	var userMarker = new google.maps.Marker({
		position: position,
		map: map,
		icon: "http://maps.google.com/mapfiles/kml/pal2/icon10.png"
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

	var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
	var userlocation = new google.maps.Marker({
		position: position,
		map: map,
		icon: "http://maps.google.com/mapfiles/kml/pal4/icon57.png",	
		title: "You are here!"
	});
	userlocation.addListener("click", function () {
		document.getElementById("description").innerHTML = "This is your current location.";		
	});	

	var space = new google.maps.Marker({
		position: {lat: 47.904314, lng: -97.037523},
		map: map,	
		icon: home
	});
	space.addListener("click", function () {
		document.getElementById("description").innerHTML = "<p>Enough space for 2 people. One bedroom (queen bed), one bathroom.</p>";
	});
	var space2 = new google.maps.Marker({
		position: {lat: 47.911372, lng: -97.035377},
		map: map,
		icon: home
	});
	space2.addListener("click", function() {
		document.getElementById("description").innerHTML = "<p>House. Enough space for 4 people. Two bedrooms (one with a queen bed, one with two single beds), one bathroom.</p>";
	});
	var space3 = new google.maps.Marker({
		position: {lat: 47.926043, lng: -97.047508},
		map: map,
		icon: home
	});
	space3.addListener("click", function() {
		document.getElementById("description").innerHTML = "<p>House. Enough space for 6 people. Three bedrooms (one with a queen bed, two with two single beds), two bathrooms.</p>";
	});
	var space4 = new google.maps.Marker({
		position: {lat: 47.869421, lng: -97.034320},
		map: map,
		icon: home
	});
	space4.addListener("click", function() {
		document.getElementById("description").innerHTML = "<p>Apartment. Enough space for 1 person. One bedroom with single bed, shared bathroom with owners.</p>";
	});
	var space5 = new google.maps.Marker({
		position: {lat: 47.922700, lng: -97.064489},
		map: map,
		icon: home
	});
	space5.addListener("click", function() {
		document.getElementById("description").innerHTML = "<p>Apartment. Enough room for three people. Two bedrooms (one with a king bed, one with a single bed), one bathroom.</p>";
	});
	var space6 = new google.maps.Marker({
		position: {lat: 47.88654, lng: -97.037904},
		map: map,
		icon: home
	});
	space6.addListener("click", function() {
		document.getElementById("description").innerHTML = "<p>House. Enough room for 10 people. Five bedrooms (each with two single beds), 2 bathrooms.</p>";
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
	$("#tags").autocomplete({
		source: availableTags
	});
});



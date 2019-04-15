script = function() {};

var request = new XMLHttpRequest();

// Open a connection to the API, using GET request on the URL endpoint
request.open("GET", "https://ghibliapi.herokuapp.com/films", true);

request.onload = function(){
	// accessing JSON data 
	var data = JSON.parse(this.response);
	//console.log(data);
	data.forEach(movie => {
		console.log(movie.title);
	})
}

request.send();
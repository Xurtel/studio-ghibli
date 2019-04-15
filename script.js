
function myFunction(){
	// Accessing our index.html's root div
const app = document.getElementById("root");
console.log(app);
// Creating image element of website
const logo = document.createElement("img");
console.log(logo);
// Set the src attribute to logo.png (because an empty img is no good)
logo.src = "logo.png";
//console.log(logo);

const container = document.createElement("div");
container.setAttribute("class", "container");

// Append the logo image and container div to the app root
app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();

// Open a connection to the API, using GET request on the URL endpoint
request.open("GET", "https://ghibliapi.herokuapp.com/films", true);

request.onload = function(){
	// accessing JSON data 
	var data = JSON.parse(this.response);
	//console.log(data);

	// Make sure HTTP status code has no error
	if (request.status >= 200 && request.status < 400){
		data.forEach(movie => {
			// Create a div with a card class
			const card = document.createElement("div");
			card.setAttribute("class", "card");

			// Create an h1 and set the text content to the film's title
			const h1 = document.createElement("h1");
			h1.textContent = movie.title;
			//console.log(movie.title);
			//console.log(movie.description);

			// Create a p and set the text content to the film's description
			const p = document.createElement("p");
			movie.description = movie.description.substring(0, 300);	// Limit to 300 chars
			p.textContent = "${movie.description}..."	// End with an ellipses

			// Append the cards to the container element
			container.appendChild(card);

			// Each card will contain an h1 and a p
			card.appendChild(h1);
			card.appendChild(p);
		})
	} else {
		//console.log("error");
		const errorMessage = document.createElement("h1");
		errorMessage.textContent = "ERROR with HTTP status!";
		app.appendChild(errorMessage);
		alert("error");
	}
	
}

request.send();
}


/*
 *	Now put this stuff (below) to the very top
 */ 

/*// Accessing our index.html's root div
const app = document.getElementById("root");

// Creating image element of website
const logo = document.createElement("img");
// Set the src attribute to logo.png (because an empty img is no good)
logo.src = "logo.png";

const container = document.createElement("div");
container.setAttribute("class", "container");

// Append the logo image and container div to the app root
//app.appendChild(logo);
//app.appendChild(container);*/
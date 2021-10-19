
var select =  document.getElementById("country");
// Country wise Case
var confirmed = document.getElementById("ConfirmedCase");
var recover = document.getElementById("RecoveredCase");
var deaths = document.getElementById("DeathCase");


select.addEventListener("change",()=>{
    var selecteditem = select.options[select.selectedIndex].value;
    console.log(selecteditem); 

	const api_key = config.SECERT_API_KEY;

	const data = null;

	const xhr = new XMLHttpRequest();
	xhr.withCredentials = true;

	xhr.addEventListener("readystatechange", function () {
		
		if (this.readyState === this.DONE) {
			const arr = JSON.parse(this.responseText);

			let confirmCase = arr[0].confirmed.toLocaleString('en-IN');
			let recoveredCase = arr[0].recovered.toLocaleString('en-IN');
			let deathCase = arr[0].deaths.toLocaleString('en-IN');

			confirmed.innerHTML = confirmCase;
			recover.innerHTML = recoveredCase;
			deaths.innerHTML = deathCase;
			

			console.log(this.responseText);
		}
	});

 xhr.open("GET", "https://covid-19-data.p.rapidapi.com/country/code?code="+selecteditem);
 xhr.setRequestHeader("x-rapidapi-host", "covid-19-data.p.rapidapi.com");
 xhr.setRequestHeader("x-rapidapi-key", api_key);

 xhr.send(data);

});



// Total Case
var TotalConfirmed = document.getElementById("TotalConfirmedCase");
var TotalRecover = document.getElementById("TotalRecoveredCase");
var TotalDeaths = document.getElementById("TotalDeathCase");

// Total Case

window.addEventListener('load',()=>{
	var api_key = config.SECERT_API_KEY;
	
	const data = null;
	const xhr = new XMLHttpRequest();
	xhr.withCredentials = true;
	
	xhr.addEventListener("readystatechange", function () {
	
	if (this.readyState === this.DONE) {
		
		const arr = JSON.parse(this.responseText);

		let confirmCase = arr[0].confirmed.toLocaleString('en-IN');
		let recoveredCase = arr[0].recovered.toLocaleString('en-IN');
	    let deathCase = arr[0].deaths.toLocaleString('en-IN');


		TotalConfirmed.innerHTML = confirmCase;
		TotalRecover.innerHTML = recoveredCase;
		TotalDeaths.innerHTML = deathCase;

			

		console.log(this.responseText);
	}
});


xhr.open("GET", "https://covid-19-data.p.rapidapi.com/totals");
xhr.setRequestHeader("x-rapidapi-host", "covid-19-data.p.rapidapi.com");

xhr.setRequestHeader("x-rapidapi-key", api_key);

xhr.send(data);

});





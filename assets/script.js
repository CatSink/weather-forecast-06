//add curl request for geographic lat and long coordinates for cities; then get curl for weather forecast
  //where to add links for timezone plugins? 
    //var utc = require('dayjs/plugin/utc');
   // var timezone = require('dayjs/plugin/timezone');
    //dayjs.extend(utc);
    //dayjs.extend(timezone);
  // setInterval(function () {
   // $('#results-container').text(dayjs.format('MM/dd/yyyy,hh:mm:ss'));
   //}, 1000);
//define dayjs
 //need to select content to import from API data, temp, humidity, wind, and icon 
var apiKey = '8bea492d6230a9ebee13e2ecfbe6d5cf';
//selects the form element for user input/search
var nameInputEl = document.getElementById('city-name');
//selects the input for city name
var timeDisplay = document.getElementById("time");
var extendedForecast = document.getElementById('forecast-five');
var citySearch = document.getElementById('submit');
var queryUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${nameInputEl}&appid=${apiKey}`;
//need variable to contain return from geo call for lat and lon
var requestUrl = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
var searchHistory= JSON.parse(localStorage.setItem('city-name')) || []; 
var lat = '';
var lon = '';
var temperature = document.getElementById("results-container");
var humidity = document.getElementById("results-container");
var wind = document.getElementById("results-container");
var icon = document.getElementById("results-container");  
//event listener to call convertCity function
  $("#submit").click(fetch());
 //function for saving user search history and getting city coordinates
  fetch(queryUrl)
    .then(function (response) {
        if (response.statusCode.ok) {
            return response.json();
        } else { 
          throw new Error(response.statusText);
        }
    })
     .then(function (data) {        
      var convertCity = {
      city: nameInputEl.value,
      lat: data.coord.lat,
      lon: data.coord.lon
      };
    searchHistory.push('');
    localStorage.getItem('city-name', JSON.stringify(searchHistory));
    displaySearchHistory();
function getForecast(data) {
    fetch(requestUrl)
     .then(function (data) {
        return response.json();

     });
    }
  });
  
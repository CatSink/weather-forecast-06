//add curl request for geographic lat and long coordinates for cities; then get curl for weather forecast
var apiKey = '0a11094e258df57717907ca4f7fdba17';
var userFormEl = document.getElementById('user-form');
//selects the form element for user input/search
var nameInputEl = document.getElementById('city-name');
//selects the input for city name
var resultsContainerEl = document.getElementById('results-container');
var extendedForecast = document.getElementById('forecast-five');
var citySearch = document.getElementById('submit');
getCoordinates = function () {
  var apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${currentCity}&appid=${apiKey}`;
  var searchHistory= JSON.parse(localStorage.getItem('city-search-history')) || [];  
  //event listener to call convertCity function
  citySearchElement.addEventListener('click', (getCoordinates)) 
 //function for saving user search history and getting city coordinates
  fetch(apiUrl)
  console.log(apiUrl)
    .then(function (response) {
        if (response.statusCode.ok) {
            return response.json();
        } else { 
          throw new Error(response.statusText);
        }
    })
     .then(function (data) {        
      var convertCity = {
        city: userFormEl.value,
        lat: data.coord.lat,
        lon: data.coord.lon
      };
    searchHistory.push(convertCity);
    localStorage.setItem('cities', JSON.stringify(searchHistory));

    displaySearchHistory();

    return convertCity;
    })
    .then(function (data) {
        getWeather(data);
    });
    return;
}
function getForecast(data) {
    var requestUrl = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch(requestUrl)
     .then(function (data) {
        return response.json();

     });
    }
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
   var temperature = document.getElementById("results-container");
   var humidity = document.getElementById("results-container");
   var wind = document.getElementById("results-container");
   var icon = document.getElementById("results-container"); 
   //append elements/add styles in for loop 
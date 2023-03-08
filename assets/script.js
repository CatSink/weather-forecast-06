//add curl request for geographic lat and long coordinates for cities; then get curl for weather forecast
var apiKey = '0a11094e258df57717907ca4f7fdba17';
var userFormEl = document.querySelector('#user-form');
//selects the form element for user input/search
var nameInputEl = document.querySelector('#city-name');
//selects the input for user name
var resultsContainerEl = document.querySelector('#results-container');
var currentCity;

var getCoordinates = function () {
  var apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${currentCity}&appid=${apiKey}`;
  var searchHistory= JSON.parse(localStorage.getItem('city-search-history')) || [];  
 //function for saving user search history and getting city coordinates
  fetch(apiUrl)
    .then(function (response) {
        if (response.statusCode === 200 && response.statusCode <=299) {
            return response.json();
        } else { 
          throw new Error(response.statusText);
        }
    })
     .then(function (data) {        
      var convertCity = {
        city: currentCity,
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
 //need to select content to import from API data, temp, humidity, wind, and icon    
      
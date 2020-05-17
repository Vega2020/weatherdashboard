// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
// WHEN I open the weather dashboard
// THEN I am presented with the last searched city forecast


//code from class bujumbura example
    // This is my API key for the weather info service.
    var APIKey = "84733b4b40205836872f7d15403843d8";

    //create a variable for the city input by the user and add it to the queryURL

    // Here we are building the URL we need to query the database. we'll change this (or maybe make additional ones) for current project. We will have to create functions that turn user search parameters into variables and then append those variables to the url. There's code for this in the news article group project. Change it to backticks so you can use jquery to build the url and delete the stuff about burundi.
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=Bujumbura,Burundi&appid=" + APIKey;

    // We then create an AJAX call
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      // this logs the query url and response object for test purposes
      console.log(queryURL);
      console.log(response);// "response" could as easily be "burrito?" test this out when code works more

      // Create CODE HERE to transfer content to HTML
      // What's going on here is the response is an object, and we're declaring variables that are pulled from keys of that object.
      var city = response.name;
      var windSpeed = response.wind.speed;
      var humidity = response.main.humidity;
      var temp = response.main.temp;

      // Then we have our divs display that as its text.
      $(".city").text(city);//make this div display the text bigger, add today's date (get code from calendar assignment) and the weather icon
      $(".wind").text("Wind speed: " + windSpeed);
      $(".humidity").text("Humidity: " + humidity + "%");//look up the syntax to do this with backticks and curly brackets instead of pluses
      $(".temp").text(temp);

      // this function puts out an ajax call to openweather and then returns the data and assigns variables to certain pieces of it. the weather dashboard will use this procedure to get variables. we need to create forms by which the user can tell the page what cities to get information about, and then create functions that will load the information onto the browser window.


    });//this is the closing bracket for the ajax call.


//code from class demo
var APIKey = "your api key here";
function getWeather(city) {
    var queryURL= `https://api.openweathermap.org/data/2.5/weather?q=$`
};

function getUv(lat, lon) {
    const queryUrl = `http://api.openweathermap.org/data/2.5/uvi?appid=${APIkey}&lat=${lat}&long={lon}`;
    $.ajax({
        url: queryURL,
        method: "GET",
    })
    .then(function (response) {
        console.log(response);
    });
}

function fiveDayForecast(lat, lon){

}

getWeather("Gilbert");
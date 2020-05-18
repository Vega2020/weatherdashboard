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

//this gets today's date from moment.js and stores it as a variable
const todaysDate = moment().format("MM/DD/YYYY");

// This is my API key for the weather info service.
var APIKey = "84733b4b40205836872f7d15403843d8";

//create a variable for the city input by the user and add it to the queryURL:
var query = $("#search-input").val();

var historyList = ["boston", ];

var history = localStorage.getItem("history");

// this line is supposed to push everything in the history into the historyList array, but it throws an error saying push isn't a function
//var newHistory = history.push(historyList);

//this is the beginning of the main call weather function
function callWeather(city) {
    
    // Here we are building the URL we need to query the database. We will have to create functions that turn user search parameters into variables and then append those variables to the url. this variable needs to exist inside the on click function because the jquery in the url itself needs to be able to see the variables it's referring to?
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${city}&appid=${APIKey}`;
    
    // We create an AJAX call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        
    // this logs the response object for test purposes
    console.log(response);// "response" could as easily be "burrito?" test this out when code works more

        // What's going on here is the response is an object, and we're declaring variables that are pulled from keys of that object.
    var city = response.name;
    var windSpeed = response.wind.speed;
    var humidity = response.main.humidity;
    var temp = response.main.temp;

    historyList.push(city);//will have to add if-else function to prevent cities from duplicating on list
    localStorage.setItem("history", historyList);
    console.log(historyList);

    // this saves the searched city to local storage to be accessed when the page loads
    localStorage.setItem("lastSearched", city);
    
    // Then we have our divs display that as its text.
    $(".city").text(city + " " + todaysDate);
    $("#weatherIconDisplay").html($("<img>").attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png"));
    $(".wind").text("Wind speed: " + windSpeed);
    $(".humidity").text("Humidity: " + humidity + "%");
    $(".temp").text(temp);

    
});//this is the closing bracket for the ajax call.

}//this is the closing bracket for the callWeather function.

//this is the function for the search button
$("#searchButton").on("click", function() {
    var city = $("#search-input").val().trim();
    callWeather(city);
});




//this gets the most recent city from local storage and displays it when the page loads
var mostRecent = localStorage.getItem("lastSearched")
callWeather (mostRecent);

//code from class for building the history
previousCities = []
localStorage.setItem("history", JSON.stringify(previousCities));




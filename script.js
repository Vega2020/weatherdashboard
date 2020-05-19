// WHEN I search for a city THEN I am presented with current and future conditions for that city and that city is added to the search history (check)
// WHEN I view current weather conditions for that city THEN I am presented with the city name (check), the date(check), an icon representation of weather conditions(check), the temperature(check), the humidity(check), the wind speed(Check), and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
// WHEN I open the weather dashboard THEN I am presented with the last searched city forecast (check)

//this gets today's date from moment.js and stores it as a variable
const todaysDate = moment().format("MM/DD/YYYY");

// This is my API key for the weather info service.
var APIKey = "84733b4b40205836872f7d15403843d8";

//create a variable for the city input by the user and add it to the queryURL:
var query = $("#search-input").val();

var history = localStorage.getItem("history");

//this is the beginning of the main call weather function
function callWeather(city) {
    
    // Here we are building the URL we need to query the database. one for the main card and one for the five day forecast.
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${city}&appid=${APIKey}`;
    var FiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}&units=imperial`;
    
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

    //STEP: we have to set longitude and latitude and do an ajax call inside this ajax call in order to make the uv index work.
    
    // This retrieves our search history and sets it to a variable. The history data's name in local storage is set by the setItem method below.
    var existing = localStorage.getItem("history");
    // If no existing data, create an array. Otherwise, convert the localStorage string to an array.
    existing = existing ? existing.split(',') : [];
    // Add new data to localStorage Array. The if statement prevents cities from being duplicated!
    if (!existing.includes(city)) existing.push(city);

    // logs our list of cities for testing
    console.log(existing);

    // Save the new history data back to localStorage to use later.
    localStorage.setItem("history", existing.toString());

    // this saves the searched city to local storage to be accessed when the page loads
    localStorage.setItem("lastSearched", city);
    
    // Then we have our divs display that as its text.
    $(".city").text(city + " " + todaysDate);
    $("#weatherIconDisplay").html($("<img>").attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png"));
    $(".wind").text("Wind speed: " + windSpeed);
    $(".humidity").text("Humidity: " + humidity + "%");
    $(".temp").text("Temperature: " + temp);

    
});//this is the closing bracket for the main ajax call.

//this is the ajax call for the 5 day forecast data, next step fill the cards with it
$.ajax({
    url: FiveDayURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
    var day1 = response.list[0].main.temp;
    var day2 = response.list[1].main.temp;
    var day3 = response.list[2].main.temp;
    var day4 = response.list[3].main.temp;
    var day5 = response.list[4].main.temp;
    $("#day1").text("Day 1: " + day1);
    $("#day2").text("Day 2: " + day2);
    $("#day3").text("Day 3: " + day3);
    $("#day4").text("Day 4: " + day4);
    $("#day5").text("Day 5: " + day5);
    
});//this is the closing bracket for the 5 day forecast ajax function.

historyColumn();

}//this is the closing bracket for the callWeather function.

//NEED: write code to generate html elements for each city in our local history and display them under the search bar
//first write a for each loop for the local history variable that makes each city an <li> and appends it to the #recentlySearchedList div.

// this function should add each item in the searched city list to be appended to the history column in li form. It works!
function historyColumn() {
    var existing = localStorage.getItem("history");
    var historyList = existing.split(",");
    historyList.forEach(putInHistory);
    console.log(historyList);

    function putInHistory(item) {
       // if (historyList.includes(item)) {return} else {
            $("#recentlySearchedList").append('<li class="list-group-item">' + item + '</li>')
       // };//closing bracket for if statement
    };//closing bracket for putInHistory function

    //NEXT: give the li an onclick function that activates callWeather(item)

};//closing bracket for historycolumn function

//this is the function for the search button. It would be good to make it operate on form submission instead.
$("#searchButton").on("click", function() {
    var city = $("#search-input").val().trim();
    callWeather(city);
});

//this gets the most recent city from local storage and displays it when the page loads
var mostRecent = localStorage.getItem("lastSearched")
callWeather (mostRecent);

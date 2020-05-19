# weatherdashboard
Weather Dashboard app for U of A full stack boot camp homework 6.

# pseudocode
GIVEN a weather dashboard with form inputs - (requires html page and form, make with bootstrap-)

WHEN I search for a city - (take search inputs from page and run them through ajax call)
THEN I am presented with current and future conditions for that city and that city is added to the search history - (function to retrieve current + future conditions, add them to an array of searched cities, and print the most recent to the browser page)

WHEN I view current weather conditions for that city - (event on the retrieved data)
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index - (display a bunch of additional information to the screen via a second function)

WHEN I view the UV index, THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe - (graphic function on this browser element? Or on click?)

WHEN I view future weather conditions for that city - (click event on one of the displayed icons)
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity - (another function involving taking an ajax call and displaying the contents in a div)

WHEN I click on a city in the search history - (store the list of searched cities to local storage)
THEN I am again presented with current and future conditions for that city - (onclick events for the list of searched cities that bring up the city again)

WHEN I open the weather dashboard, THEN I am presented with the last searched city forecast - (load the array of searched cities when the page loads)

# steps
Front end: 
1: layout bootstrap wireframe with placeholders

back end:
1: jquery calls for each thing we need to search, set variables within ajax function

# updates
1 - commit 3 or so. Cannot get bootstrap navbar to center. Successfully have main row and columns working, now need to add bootstrap component classes to them. I have found that inspecting the code of tutorial pages that use bootstrap is as helpful as actually reading the tutorials. my next step is to work on adding bootstrap components to the columns I just created.

2 - commit 6 or so. have improved jumbotron. working on building the query for the api; need to create a button to go with the search bar, then set a variable in js file for the user input, and then build it into the api url with jquery. this is why the jumbotron is currently broken, it will work again when the code to build the query url has been fixed.

3 - commit ~12. got help in class with some syntax. Small details make a difference. Through using google, annotation to make sure I understand each piece of my code, and lots of testing I have gotten most of the funtionality to work and have learned a lot about integrating ajax calls and functions in general into javascript and outputting the results to html, which are the key skills for integrating the front and back end.

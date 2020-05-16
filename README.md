# weatherdashboard
Weather Dashboard app for U of A full stack boot camp homework 6.

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


Pseudocode:

 Front end: 
 1: layout bootstrap wireframe with placeholders


 back end:
 1: jquery calls for each thing we need to search

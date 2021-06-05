$(document).ready(function(){

var searchInput=document.getElementById("searchInput");
var buttonSearch=document.getElementById("button-search");
var oneDayContainer=document.querySelector(".one-day");
var fiveDayContainer=document.querySelector(".five-day");
var cityList =$("#city-list");
var cities = [];
var API_KEY = 'c40b28aa33c2bef2881ab9e4f13c3ef7';

$("#button-search").on("click", function() {
    var userSearch = $("#searchInput").val();

    oneDay(userSearch);
    fiveday(userSearch);
})
    

function oneDay(userSearch){
    

    var apiQuery="https://api.openweathermap.org/data/2.5/weather?q=" + userSearch + "&units=imperial&appid=" + API_KEY;
    fetch(apiQuery)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        var temp=data.main.temp
        var city=data.name
        var hum=data.main.humidity
        var wind=data.wind.speed


        var mainh2=document.createElement('h2')
        mainh2.setAttribute('class', 'card-title');
        mainh2.textContent=city

       var temphtml=document.createElement('p')
      temphtml.setAttribute('class', 'card-text');
        temphtml.textContent=`Temperature: ${temp} F`

        var humhtml=document.createElement('p')
        humhtml.setAttribute('class', 'card-text');
        humhtml.textContent=`Humidity: ${hum}`

        var windhtml=document.createElement('p')
        windhtml.setAttribute('class', 'card-text');
        windhtml.textContent=`Wind: ${wind}`

        var card=document.createElement('div')
        card.setAttribute('class', 'card')
        var cardBody=document.createElement('div')
        cardBody.setAttribute('class', 'card-body')


        cardBody.append(mainh2, temphtml, humhtml, windhtml);
        card.append(cardBody);
        $('.one-day').append(card)

        uvi(data.coord.lat, data.coord.lon)
    })
}

function uvi(lat, lon) {
   var uviapi=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=c40b28aa33c2bef2881ab9e4f13c3ef7`
   fetch(uviapi)
   .then(function(res){
       return res.json();
   })
   .then(function(data){
       var uvix=data.current.uvi
       let cardBody=document.querySelector(".card-body")

       var uvixhtml=document.createElement('p')
       uvixhtml.setAttribute('class', 'card-text');
       uvixhtml.textContent=`UVI: ${uvix}`
       cardBody.append(uvixhtml);



   })
}
function fiveday(userSearch){
    var fiveapi=`api.openweathermap.org/data/2.5/forecast?q=${userSearch}&appid=c40b28aa33c2bef2881ab9e4f13c3ef7`
    fetch(fiveday)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
    var fiveday
    for(var i=0; i< data.list.length; i++) {

    }
    })
}

//oneDay();

//define some global Variables
//searchHistory (as a array)
//apl url
//api key

// Reference your DOM elements

// function to push the searchHistory from user input
    //allow access to the city name with its clicked

// create a function to retrieve search history from local storage
var cardHead = document.createElement('div');

// function to display the current weather data and append information to the page

// create second api call to retrieve the 5 day weather forecast and render to the page

// create second api call
// create variables to grab api response to be able to move insert api data into second api




//function to get UV index and render to the page

// create a handler to check search field and return data if no data is in search field return;
})
$(document).ready(function(){

var searchInput=document.getElementById("searchInput");
var buttonSearch=document.getElementById("button-search");
var oneDayContainer=document.querySelector(".one-day");
var fiveDayContainer=document.querySelector(".five-day-forecast");
var cityList =$("#city-list");
var cities = [];
var API_KEY = 'c40b28aa33c2bef2881ab9e4f13c3ef7';

//Calling function init();
init();

//Function init();
function init(){
    //Get stored cities from localStorage
    //Parsing the JSON string to an object
    var storedCities = JSON.parse(localStorage.getItem("cities"));

    // If cities were retrieved from localStorage, update the cities array to it
    if (storedCities !== null) {
        cities = storedCities;
      }
    // Render cities to the DOM
    renderCities();
    // console.log(cities);
}

$("#button-search").on("click", function() {
    var userSearch = $("#searchInput").val();

    cities.push(userSearch);
    renderCities();
    storeCities();

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
        $('.one-day').empty();
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
    var fiveapi="https://api.openweathermap.org/data/2.5/forecast?q=" + userSearch + "&units=imperial&&appid=" + API_KEY;
    fetch(fiveapi)
    .then(function(res){
        return res.json();
    })
    .then(function(data){

    //DAY TWO
    var temp=data.list[1].main.temp
    var city=data.list[1].name
    var hum=data.list[1].main.humidity
    var wind=data.list[1].wind.speed


    var mainh2=document.createElement('h2')
    mainh2.setAttribute('class', 'card-title');
    mainh2.textContent="Day 2";

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
    $('.two-day').empty();
    $('.two-day').append(card)

    //DAY THREE
    var temp=data.list[2].main.temp
    var city=data.list[2].name
    var hum=data.list[2].main.humidity
    var wind=data.list[2].wind.speed


    var mainh2=document.createElement('h2')
    mainh2.setAttribute('class', 'card-title');
    mainh2.textContent="Day 3";

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
    $('.three-day').empty();
    $('.three-day').append(card)
    
    //DAY FOUR
    var temp=data.list[3].main.temp
    var city=data.list[3].name
    var hum=data.list[3].main.humidity
    var wind=data.list[3].wind.speed


    var mainh2=document.createElement('h2')
    mainh2.setAttribute('class', 'card-title');
    mainh2.textContent="Day 4";

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
    $('.four-day').empty();
    $('.four-day').append(card)

    //DAY FIVE
    var temp=data.list[4].main.temp
    var city=data.list[4].name
    var hum=data.list[4].main.humidity
    var wind=data.list[4].wind.speed


    var mainh2=document.createElement('h2')
    mainh2.setAttribute('class', 'card-title');
    mainh2.textContent="Day 5";

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
    $('.five-day').empty();
    $('.five-day').append(card)
    })
}

//Function StoreCities()
function storeCities(){
    // Stringify and set "cities" key in localStorage to cities array
   localStorage.setItem("cities", JSON.stringify(cities));
   console.log(localStorage);
 }

 function renderCities() {
    // Clear cityList element
    // cityList.text = "";
    // cityList.HTML = "";
    cityList.empty();
    
    // Render a new li for each city
    for (var i = 0; i < cities.length; i++) {
      var city = cities[i];
      
      var li = $("<li>").text(city);
      li.attr("id","listC");
      li.attr("data-city", city);
      li.attr("class", "list-group-item");
      //li.attr("onclick", "oneDay(Edison);");
      console.log(li);
      cityList.prepend(li);
    }
    //Get Response weather for the first city only
    if (!city){
        return
    } 
    else{
        oneDay(city);
        fiveday(city)
    };
}   



//Click function to each Li 
$(document).on("click", "#listC", function() {
    var thisCity = $(this).attr("data-city");
    console.log(thisCity);
    oneDay(thisCity);
    fiveday(thisCity);
  });

})
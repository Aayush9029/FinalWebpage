$(document).ready(function () {
    
  // Get Location (asks for location access !!!)
  navigator.geolocation.getCurrentPosition(success, error);

  function success(pos) {
      var lat = pos.coords.latitude;
      var long = pos.coords.longitude;
      weather(lat, long);
  }

  function error() {
      console.log('There was an error');
  }

  // Call Weather
  function weather(lat, long) {
      var URL = `https://api.openweathermap.org/data/2.5/weather?APPID=bc491408821cc43317006173fd1c5bef&lat=${lat}&lon=${long}&units=metric`;

      $.getJSON(URL, function(data) {
          updateDOM(data);
          console.log(data);
      });
  }

  // Update Dom
  function updateDOM(data) {
      var city = (data.name);
      var temp = Math.round(data.main.temp);
      var desc = data.weather[0].description;
      var greeting;
      
        if (temp > 15) {
        greeting = "No Jacket Necessary";

         }else if (temp < 5){
          greeting ='Heavy Jacket';
          }else {
         greeting ='light jacket';
        }

      $('#city').html(city.toUpperCase());
      $('#temp').html(temp);
      $('#desc').html(desc.toUpperCase());
      $('#wear').html(greeting);

  }
});

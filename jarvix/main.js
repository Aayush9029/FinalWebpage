let temp;
let desc;
let max;
let min;
let wind;
let humid;

//-----------------------------------------------------text-to-speech------------------------------------------------------
let msg = new SpeechSynthesisUtterance();
let voices = window.speechSynthesis.getVoices();
msg.voice = voices[10]; // Note: some voices don't support altering params
msg.voiceURI = "native";
msg.volume = 1; // 0 to 1
msg.rate = 1; // 0.1 to 10
msg.pitch = 1; //0 to 2
msg.text = "Hello Aayush, How can I Help You?";
msg.lang = "en-US";

msg.onend = function(e) {
  console.log("Finished in " + event.elapsedTime + " seconds.");
};

//---------tts end (use speechSynthesis.speak(msg);) to say stuff------------------------------

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition,
  recognition = new SpeechRecognition();
recognition.lang = "en-US";
recognition.continuous = true;
recognition.interimResults = false;

let words = "";
let sentences = [];
let lastCommand;
recognition.onstart = function(e) {
  console.table("Start Giving commands", e);
};
recognition.onend = function(e) {
  console.table("onend", e);
};
recognition.onresult = function(e) {
  console.table("onresult", e);
};
recognition.onspeechend = function(e) {
  console.table("onspeechend", e);
};
recognition.onerror = function(e) {
  console.table("onerror", e);
};

recognition.start();

recognition.onresult = function(e) {
  // console.table(e.results.length);
  let a = e.results.length - 1;
  words = e.results[a][0].transcript;
  sentences.push(words);
  lastCommand = sentences[a].toLowerCase();
  task(lastCommand);
};

function task() {
  document.getElementById("text").innerHTML = "";
  // console.log(lastCommand);

  let singleWord = lastCommand.split(" ");
  console.log(singleWord);

  for (w of singleWord) {
    if (w == "weather" || w == "temperature") {
      sayWeather();
    } else if (w == "date") {
      sayDate();
    } else if (w == "time") {
      sayTime();
    } else if (w == "thank") {
      sayBye();
    } else if (w == "open") {
      openSite();
    } else if (w == "joke") {
      newJoke();
    } else if (w == "reddit") {
      funny();
    }
    document.getElementById("text").innerHTML += " " + w;
  }
  singleWord = [];
}

//-------------------------------weather part---------------------------------------------------------------------------------------

//jquery manupulation
navigator.geolocation.getCurrentPosition(success, error);

function success(pos) {
  var lat = pos.coords.latitude;
  var long = pos.coords.longitude;
  weather(lat, long);
}

function error() {
  console.log("There was an error");
}

// Call Weather
function weather(lat, long) {
  var URL = `https://api.openweathermap.org/data/2.5/weather?APPID=bc491408821cc43317006173fd1c5bef&lat=${lat}&lon=${long}&units=metric`;

  $.getJSON(URL, function(data) {
    // console.log(data);
    temp = Math.round(data.main.temp, 1);
    desc = data.weather[0].description;
    max = Math.round(data.main.temp_max, 1);
    min = Math.round(data.main.temp_min, 1);
    wind = data.wind.speed;
    humid = data.main.humidity;

    console.log(msg.text + "okok");
  });
}

function sayWeather() {
  msg.text =
    "Today's high is " +
    max +
    " degrees" +
    " and low is " +
    min +
    " degrees" +
    " wind speed is " +
    wind +
    " kilometer per hour " +
    "and humid is " +
    humid +
    " and current tempreature is " +
    temp +
    " it's, " +
    desc;
  let showWeater =
    "high: " +
    max +
    " degrees <br>" +
    " low: " +
    min +
    " degrees <br>" +
    " wind speed: " +
    wind +
    " km/hr<br>" +
    "Humid: " +
    humid +
    " <br>Current Temp: " +
    temp +
    " <br>" +
    desc +
    "<p>";
  speechSynthesis.speak(msg);
  document.getElementById("text").innerHTML = " ";
  document.getElementById("text").innerHTML += " " + showWeater;
}
function sayDate() {
  var event = new Date();
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  msg.text = event.toLocaleDateString("en-US", options);

  speechSynthesis.speak(msg);
  document.getElementById("text").innerHTML = " ";
  document.getElementById("text").innerHTML = msg.text;

  console.log(msg.text);
}
function sayTime() {
  var time = new Date();
  time = time.toLocaleString("en-US", { hour: "numeric", hour12: true });
  msg.text = time;
  speechSynthesis.speak(msg);
  document.getElementById("text").innerHTML = " ";
  document.getElementById("text").innerHTML += " " + msg.text;
}

function sayBye() {
  msg.text = "bye for now";
  document.getElementById("text").innerHTML = " ";
  document.getElementById("text").innerHTML += " " + msg.text;
  speechSynthesis.speak(msg);
}
speechSynthesis.speak(msg);

//jokes working on it.....................................

var jokes = [
  "Guess the number of programmers it takes to change a light bulb? Zero its a hardware problem",
  "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
  "Real programmers count from 0.",
  "Why did the programmer quit his job? Because he didnt get arrays.",
  "A foo walks into a bar takes a look around and says Hello World",
  "0 is false 1 is true right? 1",
  "Things arent always #000000 and #FFFFFF.",
  "What is the most used language in programming? Profanity",
  "!False its funny because its True",
  "You had me at Hello World",
  "2b||!2b",
  "Yesterday I changed the name on my wifi to Hack if you can. Today I found it named Challenge Accepted",
  "A programmer is a person who fixed a problem that you didnt know you had in a way you dont understand",
  "How can you tell if a computer geek is an extrovert? They stare at your shoes when you talk instead of their own.",
  "I would love to change the world but they wont give me the source code.",
  "If at first you dont succedd call it version 1.0",
  "Computers make very fast very accurate mistakes",
  "I farted in the Apple store and everyone got mad at me. Not my fault they dont have Windows.",
  "Knock Knock... Whos there? Art... Art Who? R2D2",
  "Hilarious and amazingly true thing: if a pizza has a radius (z) and a depth (a) that pizzas volume can be defined Pi*z*z*a."
];

function newJoke() {
  var randomNumber = Math.floor(Math.random() * 20);
  document.getElementById("text").innerHTML = " ";
  document.getElementById("text").innerHTML = jokes[randomNumber];
  msg.text = jokes[randomNumber];
  speechSynthesis.speak(msg);
}

function funny() {
  var randomNumber2 = Math.floor(Math.random() * 20);
  $.getJSON(
    "https://raw.githubusercontent.com/taivop/joke-dataset/master/stupidstuff.json",
    p => {
      msg.text = p[randomNumber2].body;
      speechSynthesis.speak(msg);
      document.getElementById("text").innerHTML = " ";
      document.getElementById("text").innerHTML = msg.text;
    }
  );
}

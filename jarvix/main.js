let temp;
let desc;
let max;
let min;
let wind;
let humid;
let ok = false;
let url;

let query;
// let query = prompt("type what you want to search");

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
  console.log(lastCommand);

  if (lastCommand == " hey jarvis") {
    console.log("i'm good");
    msg.text = "hey";
    speechSynthesis.speak(msg);
  }
  if (lastCommand == " hey jarvis how are you") {
    console.log("i'm good");
    msg.text = "I am good";
    speechSynthesis.speak(msg);
  }
  if (lastCommand == " what can you do") {
    console.log("i'm good");
    msg.text =
      "I can do online search, recommend  videos , say tempreature, clock info and  puns";
    document.getElementById("text").innerHTML = msg.text + "<p>";

    speechSynthesis.speak(msg);
  }

  let singleWord = lastCommand.split(" ");
  console.log(singleWord);

  for (w of singleWord) {
    if (w == "weather") {
      sayWeather();
    } else if (w == "date") {
      sayDate();
    } else if (w == "time") {
      sayTime();
    } else if (w == "thank") {
      window.open("", "_self", ""); //closes the browser -- force close --
      window.close();

      sayBye();
    } else if (w == "open") {
      openSite();
    } else if (w == "joke") {
      newJoke();
    } else if (w == "reddit") {
      funny();
    } else if (w == "jokes") {
      funny2();
    } else if (w == "stupid") {
      noU();
    } else if (w == "jarvis") {
      console.log(10);
      for (a of singleWord) {
        if (a == "funny") {
          //funny3();
          console.log("lololol");
        }
      }
    } else if (w == "youtube") {
      let lastYtWord = singleWord[singleWord.length - 1];
      let url = "https://www.youtube.com/results?search_query=" + lastYtWord;
      openInNewTab(url);
    } else if (w == "google") {
      let lastGWord = singleWord[singleWord.length - 1];
      let url2 = "http://www.google.com/search?q=" + lastGWord;
      openInNewTab(url2);
    } else if (w == "gif" || w == "gifs") {
      console.log("ok");
      let lastGWord = singleWord[singleWord.length - 1];
      query = lastGWord;
      console.log(query);
      searchGIf(query);
    } else if (w == "reload") {
      location.reload();
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
    " &deg;C <br>" +
    " low: " +
    min +
    " &deg;C  <br>" +
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

  time = time.toLocaleTimeString("en-US");
  msg.text = time;
  speechSynthesis.speak(msg);
  document.getElementById("text").innerHTML = " ";
  document.getElementById("text").innerHTML += " " + msg.text + "<p>";
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
  "If at first you dont succeed call it version 1.0",
  "Computers make very fast very accurate mistakes",
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
function noU() {
  document.getElementById("text").innerHTML = " ";
  document.getElementById("text").innerHTML = "no U";
  msg.text = "no you";
  speechSynthesis.speak(msg);
}

function funny() {
  var randomNumber2 = Math.floor(Math.random() * 20);
  //raw.githubusercontent.com/elijahmanor/devpun/master/
  https: console.log(randomNumber2);
  $.getJSON(
    "https://raw.githubusercontent.com/15Dkatz/jokes-api-ruby/master/data/jokes.json",
    p => {
      text1 = p[randomNumber2].setup;
      text2 = p[randomNumber2].punchline;
      msg.text = text1 + text2;
      speechSynthesis.speak(msg);
      document.getElementById("text").innerHTML = " ";
      document.getElementById("text").innerHTML = text1 + "<br>" + text2;
    }
  );
}

function funny2() {
  var randomNumber2 = Math.floor(Math.random() * 20);
  console.log(randomNumber2);
  $.getJSON("jokes.json", p => {
    if (p[randomNumber2].question == "undefined") {
      jokes2();
    }
    // text1 = p[randomNumber2].text;
    text2 = p[randomNumber2].question;
    text3 = p[randomNumber2].answer;
    msg.text =
      //text1 +
      text2 + text3;
    speechSynthesis.speak(msg);
    document.getElementById("text").innerHTML = " ";
    document.getElementById("text").innerHTML =
      //text1 + "<br>" +
      text2 + "<p>" + text3;
  });
}

function openInNewTab(url) {
  var win = window.open(url, "_blank");
}

//------------------giphy------------

function setup() {
  noCanvas();
}

function searchGIf(url) {
  url =
    "https://api.giphy.com/v1/gifs/search?q=" +
    query +
    "&api_key=i16haKNFolQNdDBdlNvQh8IHuL7Jz1so";
  loadJSON(url, gotData);
}
function gotData(giphy) {
  let totalUrlNumber = giphy.data.length;
  let randomNum = Math.floor(random(1, totalUrlNumber));
  console.log(totalUrlNumber);
  let imgg = createImg(giphy.data[randomNum].images.original.url);
  imgg.id("ok");
}

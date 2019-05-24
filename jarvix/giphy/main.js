let url;

let query = "sad";
// let query = prompt("type what you want to search");

function setup() {
  noCanvas();
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
  createImg(giphy.data[randomNum].images.original.url);
}

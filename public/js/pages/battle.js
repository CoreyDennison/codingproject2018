/*import SpotifyAPI from "../api/spotify.js";
import {getHashParams} from "../helpers/url.js";
import {STATE_KEY} from "../helpers/constants.js";

const USER_PROFILE = document.getElementById('user-profile');
const {access_token, state} = getHashParams();
const storedState = localStorage.getItem(STATE_KEY);

if (!access_token || (state == null || state !== storedState)) {
  window.location = "/";
} else {
  // wrap this in event listener
  document.getEventListener("#artist1").addEventListener("keypress", () => {
  	if(event.keyCode === 13)
  SpotifyAPI.getArtist(access_token).then(data => {
    //USER_PROFILE.innerHTML = outputTemplate(data);
    // artist1Data = 
    console.log(data);
  });
}

*/
function battleFunc() {
    var text = document.getElementById("artist1").value;
    var text2 = document.getElementById("artist2").value;
    document.getElementById("info1").innerHTML = text;
    document.getElementById("info2").innerHTML = text2;
    document.getElementById("artist1").value = "";
    document.getElementById("artist2").value = "";
}

function enterFunc() {
  if (event.keyCode === 13) {
    document.getElementById("battleButton").click();
  }
}

//load and print artists.json (Run on server)
function loadJSON() {
  fetch("../artists(1).json")
  .then(function(response){
    return response.json();
  })
   .then(function(data){
      let html = '';
      data.forEach(function(artist){
        html += `
          <li>${artist.name}</li>
        `;
      });
      document.getElementById("result").innerHTML = html;
   })
}
/*
function matchData(){
  fetch("../artists(1).json")
  .then(function(response){
    return response.json();
  })
   .then(function(data){
    data.forEach(function(artist){
      var getInfo1 = document.getElementById("artist1").value;
    });
    document.getElementById("info1").innerHTML = ;
   })
}
*/
//Create Javascript array from array in artists(1).json
function makeArray() {
  $.getJSON('../artists(1).json', function (json) {
  var artists = [];
  var artistsStr = JSON.stringify(artists);
  for (var key in json) {
      if (json.hasOwnProperty(key)) {
          var item = json[key];
          artists.push({
              name: item.name
          });            
      }
  }
  document.getElementById("result").innerHTML = artistsStr;
  });
}
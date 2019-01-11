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

function enterFunc() {
  if (event.keyCode === 13) {
    document.getElementById("battleButton").click();
  }
}

//Create Javascript array from array in artists(1).json
function makeArray() {
  //.getJSON is a JQuery method
  $.getJSON('../artists(1).json', function (json) {
  var artists = [];
  for (var key in json) {
      if (json.hasOwnProperty(key)) {
          var item = json[key];
          artists.push({
              /*pushes each object with the key 'name' 
              and its value in artists(1).json to 
              JavaScript artists array*/ 
              name: item.name,
              popularity: item.popularity,
              followers: item.followers.total,
              type: item.type,
              genres: item.genres,
              images: item.images
          });            
      }
  }
    for (var i = 0; i < artists.length; i++) {
      var getInfo1 = document.getElementById("artist1").value;
      var getInfo2 = document.getElementById("artist2").value;
      if(artists[i].name === getInfo1){
        var nameStr = JSON.stringify(artists[i].name)
        document.getElementById("info1").innerHTML = nameStr;
      }
        else if(artists[i].name === getInfo2){
          var nameStr = JSON.stringify(artists[i].name)
          document.getElementById("info2").innerHTML = nameStr;
        }
    };
  });
}

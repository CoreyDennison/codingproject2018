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

  let savedArtists = null;
  function makeArray() {
    $.getJSON('../artists.json', function (artists) {
      const artists = json.artists;  // could be written as const {artists} = json; either
      savedArtists = artists;
      document.getElementById("result").innerHTML = JSON.stringify(artists);
    });
  }
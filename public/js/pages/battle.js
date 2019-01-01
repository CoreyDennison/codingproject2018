import SpotifyAPI from "../api/spotify.js";
import {getHashParams} from "../helpers/url.js";
import {STATE_KEY} from "../helpers/constants.js";

const USER_PROFILE = document.getElementById('user-profile');
const {access_token, state} = getHashParams();
const storedState = localStorage.getItem(STATE_KEY);

const artist1Data;
const artist2Data;

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


document.function barFunc() {
    console.log("test");
}

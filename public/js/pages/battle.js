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
}

function enterFunc() {
  if (event.keyCode === 13) {
    document.getElementById("battleButton").click();
  }
}


//load and print artists.json (Run on server)
function loadJSON() {
  fetch("../employees.json")
  .then(function(response){
    return response.json();
  })
   .then(function(data){
      let html = '';
      data.forEach(function(employee){
        html += `
          <li>${employee.name} ${employee.job}</li>
        `;
      });
      document.getElementById("result").innerHTML = html;
   })
}

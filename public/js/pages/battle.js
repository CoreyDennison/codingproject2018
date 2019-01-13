"use strict";

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
function makeAndSearch() {
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
    //search artists array for search bar input and display
    for (var i = 0; i < artists.length; i++) {
      var getInfo1 = document.getElementById("artist1").value;
      var getInfo2 = document.getElementById("artist2").value;
      //if input of first bar is found in the array...
      if(artists[i].name === getInfo1){
        //get and display artist's image
        var image1 = document.createElement('img');
        image1.setAttribute("src", artists[i].images[0].url);
        document.getElementById("img1").appendChild(image1);
        
        //get and display artist's info
        document.getElementById("name1").innerHTML = artists[i].name;
        document.getElementById("pop1").innerHTML = "Popularity: " + artists[i].popularity;
        document.getElementById("follow1").innerHTML = "Followers: " + artists[i].followers;
        document.getElementById("type1").innerHTML = "Type: " + artists[i].type;
        document.getElementById("genre1").innerHTML = "Genres: " + artists[i].genres;
        //create variables of data for tallying purposes
        var name1_1 = artists[i].name;
        var popular1 = artists[i].popularity;
        var followers1 = artists[i].followers;
        var types1 = artists[i].type.length;
        var genres1 = artists[i].genres.length;
      }
      //if input of second bar is found in the array...
        else if(artists[i].name === getInfo2){
          var image2 = document.createElement("img");
          image2.setAttribute("src", artists[i].images[0].url);
          document.getElementById("img2").appendChild(image2);
          
          document.getElementById("name2").innerHTML = artists[i].name;
          document.getElementById("pop2").innerHTML = "Popularity: " + artists[i].popularity;
          document.getElementById("follow2").innerHTML = "Followers: " + artists[i].followers;
          document.getElementById("type2").innerHTML = "Type: " + artists[i].type;
          document.getElementById("genre2").innerHTML = "Genres: " + artists[i].genres;

          var name2_1 = artists[i].name;
          var popular2 = artists[i].popularity;
          var followers2 = artists[i].followers;
          var types2 = artists[i].type.length;
          var genres2 = artists[i].genres.length;
       }
       //comparison code
        var popular1_1 = popular1;
        var popular2_1 = popular2;
        var followers1_1 = followers1;
        var followers2_1 = followers2;
        var types1_1 = types1;
        var types2_1 = types2;
        var genres1_1 = genres1;
        var genres2_1 = genres2;

        var total1 = 0;
        var total2 = 0;

        if(popular1_1 > popular2_1){
          total1 ++;
        }

        else if(popular1_1 < popular2_1){
          total2++;
        }

        if(followers1_1 > followers2_1){
          total1 ++;
        }

        else if(followers1_1 < followers2_1){
          total2++;
        }

        if(types1_1 > types2_1){
          total1 ++;
        }

        else if(types1_1 < types2_1){
          total2++;
        }

        if(genres1_1 > genres2_1){
          total1 ++;
        }

        else if(genres1_1 < genres2_1){
          total2++;
        }

        document.getElementById("total1").innerHTML = "Total: " + total1;
        document.getElementById("total2").innerHTML = "Total: " + total2;

        //Tally system
        if(total1 > total2){
          document.getElementById("winner").innerHTML = "And the winner is... " + JSON.stringify(name1_1);
        }

        else if (total1 < total2){
          document.getElementById("winner").innerHTML = "And the winner is... " + JSON.stringify(name2_1);
        }

        else if (total1 === total2){
          document.getElementById("winner").innerHTML = "It's a draw!";
        }

        else{
          document.getElementById("winner").innerHTML = " ";
        }
    };
  });
}
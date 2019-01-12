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
        var nameStr1 = JSON.stringify(artists[i].name)
        /*//get and display artist's image (error 404)
        var image1 = document.createElement("IMG");
        image1.setAttribute("src", artists[i].images.url);
        document.getElementById("img1").appendChild(image1);
        */
        //get and display artist's info
        document.getElementById("name1").innerHTML = nameStr1;
        document.getElementById("pop1").innerHTML = "Popularity: " + artists[i].popularity;
        document.getElementById("follow1").innerHTML = "Followers: " + artists[i].followers;
        document.getElementById("type1").innerHTML = "Type: " + artists[i].type;
        document.getElementById("genre1").innerHTML = "Genres: " + artists[i].genres;
        document.getElementById("total").innerHTML = "Total: " + total1;
        //create variables of data for tallying purposes
        const popular1 = artists[i].popularity;
        const followers1 = artists[i].followers;
        const types1 = artists[i].type.length;
        const genres1 = artists[i].genres.length;
      }
      //if input of second bar is found in the array...
        else if(artists[i].name === getInfo2){
          var nameStr2 = JSON.stringify(artists[i].name);
          /*
          var image2 = document.createElement("IMG");
          image2.setAttribute("src", artists[i].images.url);
          document.getElementById("img2").appendChild(image2);
          */
          document.getElementById("name2").innerHTML = nameStr2;
          document.getElementById("pop2").innerHTML = "Popularity: " + artists[i].popularity;
          document.getElementById("follow2").innerHTML = "Followers: " + artists[i].followers;
          document.getElementById("type2").innerHTML = "Type: " + artists[i].type;
          document.getElementById("genre2").innerHTML = "Genres: " + artists[i].genres;
          document.getElementById("total").innerHTML = "Total: " + total2;

          const popular2 = artists[i].popularity;
          const followers2 = artists[i].followers;
          const types2 = artists[i].type.length;
          const genres2 = artists[i].genres.length;
       }

       var total1 = 0;
       var total2 = 0;

       if(popular1 > popular2){
        total1 ++;
       }

       else if (popular2 > popular1){
        total2++;
       }

      if(followers1 > followers2){
        total1 ++;
       }

       else if (followers2 > followers1){
        total2++;
       }

      if(types1 > types2){
        total1 ++;
       }

       else if (types2 > types1){
        total2++;
       }

      if(genres1 > genres2){
        total1 ++;
       }

       else if (genres2 > genres1){
        total2++;
       }



       //write if statements for tallying
    };
  });
}

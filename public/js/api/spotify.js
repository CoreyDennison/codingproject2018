/*const getUserData = (accessToken, q) => {
  return fetch(`https:api.spotify.com/v1/me`,  {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
  }).then(response => response.json())
};*/


const getArtist = (accessToken, q) => {
  return fetch(`https://api.spotify.com/v1/search?q=${q}&offset=1`  {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
  }).then(response => response.json())
};

export default {
  getArtist
}
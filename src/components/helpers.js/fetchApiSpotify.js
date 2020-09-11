import axios from "axios";
import authSpotify from "./authSpotify";

const fetchApiSpotify = () => {
  function getRandomSearch() {
    const characters = "abcdefghijklmnopqrstuvwxyz";
    const randomCharacter = characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
    return randomCharacter;
  }

  return authSpotify().then(async (_token) => {
    const endpoint = "https://api.spotify.com/v1/search?";
    const query = getRandomSearch();
    const type = "track";
    const limit = "1";
    const offset = Math.floor(Math.random() * 2000);
    const url = `${endpoint}q=${query}&type=${type}&limit=${limit}&offset=${offset}`;
    const resultFetch = await axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${_token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.data)
      .catch((error) => {
        console.log("errorFetchSpotify", error);
      });
    const track = resultFetch.tracks.items[0];
    const detailsTrack = {
      title: track.name,
      album: track.album.name,
      artist: track.album.artists[0].name,
      year: track.album.release_date.substring(0, 4),
      cover: track.album.images[1].url,
      previewUrl: track.preview_url || "",
      externalUrl: track.external_urls.spotify || "",
    };
    return detailsTrack;
  });
};
export default fetchApiSpotify;

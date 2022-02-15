import SpotifyWebApi from "spotify-web-api-node";

const spotify = new SpotifyWebApi();
const { REACT_APP_SPOTIFY_TOKEN } = process.env ?? "none";
spotify.setAccessToken(REACT_APP_SPOTIFY_TOKEN as string);

export { spotify };

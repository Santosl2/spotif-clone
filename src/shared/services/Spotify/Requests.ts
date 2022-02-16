import { spotify } from ".";

export async function getPlaylistByCategory(
  category: string,
  limit: number = 8
) {
  try {
    const response = await spotify.getPlaylistsForCategory(category, {
      country: "BR",
      limit,
    });

    return response.body.playlists.items;
  } catch {}
}

export async function getRandomSongByArtist(artist: string) {
  try {
    const response = await spotify.searchTracks(artist);

    return response.body.tracks?.items;
  } catch {}
}

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

import { Divider } from "@/components/atoms";
import { SongBox } from "@/components/organisms";
import { ResponsePlaylistProps } from "@/shared/interfaces/Playlist";
import { getPlaylistByCategory } from "@/shared/services/Spotify/Requests";
import { useEffect, useState } from "react";
import { RecommendedPlaylist } from "..";
import { Container } from "./styles";

export function PlaylistBody() {
  const [lastPlay, setLastPlay] = useState<ResponsePlaylistProps[]>([]);

  useEffect(() => {
    getPlaylistByCategory("chill").then((response) => {
      setLastPlay(response as ResponsePlaylistProps[]);
    });
  }, []);

  return (
    <Container>
      <h1>Good afternoon</h1>

      <Divider />

      <div className="flex">
        {lastPlay?.map((song) => {
          return <SongBox key={song.id} data={song} />;
        })}
      </div>

      <Divider />

      <RecommendedPlaylist genreName="POP" genreCode="pop" />

      <Divider />

      <RecommendedPlaylist genreName="House " genreCode="at_home" />
    </Container>
  );
}

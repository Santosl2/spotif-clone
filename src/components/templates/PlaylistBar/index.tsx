import { ImageBox } from "@/components/atoms";
import {
  PlaylistInfo,
  SongPlayer,
  SongSoundControler,
} from "@/components/organisms";
import { ResponsePlaylistProps } from "@/shared/interfaces/Playlist";
import { getRandomSongByArtist } from "@/shared/services/Spotify/Requests";
import { useEffect, useState } from "react";
import { Container } from "./styles";

export function PlaylistBar() {
  const [songInfo, setSongInfo] = useState<ResponsePlaylistProps>();

  useEffect(() => {
    getRandomSongByArtist("Alok").then((response) => {
      if (response) {
        setSongInfo(response[0].album as ResponsePlaylistProps);
      }
    });
  }, []);

  return (
    <Container>
      <PlaylistInfo data={songInfo} />
      <SongPlayer />
      <SongSoundControler />
    </Container>
  );
}

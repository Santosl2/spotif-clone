import { Container } from "./styles";
import { spotify } from "@/shared/services/Spotify";
import { useEffect, useState } from "react";
import { ResponsePlaylistProps } from "@/shared/interfaces/Playlist";
import { NavbarList } from "@/components/organisms";

export function Navbar() {
  const [playlists, setPlaylists] = useState<ResponsePlaylistProps[]>([]);

  useEffect(() => {
    spotify.getUserPlaylists("oks83u4q1lanqmwfxt4flyj77").then((response) => {
      const items = response.body.items as ResponsePlaylistProps[];
      setPlaylists(items);
    });
  }, []);

  return (
    <Container>
      <NavbarList data={playlists} />
    </Container>
  );
}

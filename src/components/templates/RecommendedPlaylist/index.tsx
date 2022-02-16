import { Divider } from "@/components/atoms";
import { RecommendBox } from "@/components/organisms";
import { ResponsePlaylistProps } from "@/shared/interfaces/Playlist";
import { getPlaylistByCategory } from "@/shared/services/Spotify/Requests";
import { useEffect, useState } from "react";
import { Container } from "./styles";

type Props = {
  genreName: string;
  genreCode: string;
};

export function RecommendedPlaylist({ genreName, genreCode }: Props) {
  const [recommended, setRecommended] = useState<ResponsePlaylistProps[]>([]);

  useEffect(() => {
    getPlaylistByCategory(genreCode, 6).then((response) => {
      setRecommended(response as ResponsePlaylistProps[]);
    });
  }, []);

  return (
    <Container>
      <div>
        <h1>{genreName}</h1>
        <small>Recommend for you</small>
      </div>

      <Divider />

      <div className="flex">
        {recommended?.map((rec) => {
          return <RecommendBox key={rec.id} data={rec} />;
        })}
      </div>
    </Container>
  );
}

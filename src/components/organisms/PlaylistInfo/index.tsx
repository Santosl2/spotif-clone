import { ImageBox } from "@/components/atoms";
import { ResponsePlaylistProps } from "@/shared/interfaces/Playlist";
import { Container } from "./styles";

type Props = {
  data?: ResponsePlaylistProps;
};
export function PlaylistInfo({ data }: Props) {
  return (
    <Container>
      <ImageBox src={data?.images[0].url} />

      <div>
        <p>{data?.name}</p>
        <small>{data?.artists?.map((artist) => artist.name).join(" & ")}</small>
      </div>
    </Container>
  );
}

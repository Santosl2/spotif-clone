import { ImageBox } from "@/components/atoms";
import { ResponsePlaylistProps } from "@/shared/interfaces/Playlist";
import { Container } from "./styles";

type Props = {
  data: ResponsePlaylistProps;
};

function ellipsesText(text: string | undefined) {
  if (text === undefined) return text;

  if (text.length > 50) {
    return `${text.slice(0, 50)}...`;
  }

  return text;
}

export function RecommendBox({ data }: Props) {
  return (
    <Container>
      <ImageBox src={data.images[0].url} />
      <p>{data.name}</p>
      <small>{ellipsesText(data.description)}</small>
    </Container>
  );
}

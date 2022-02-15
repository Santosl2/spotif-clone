import { ImageBox } from "@/components/atoms/Image";
import { Info } from "./styles";

type Props = {
  imageUrl: string;
  name: string;
};

export function SongInfo({ imageUrl, name }: Props) {
  return (
    <Info>
      <ImageBox src={imageUrl} />
      {name}
    </Info>
  );
}

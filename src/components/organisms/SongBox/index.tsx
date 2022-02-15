import { SongInfo } from "@/components/molecules";
import { ResponsePlaylistProps } from "@/shared/interfaces/Playlist";
import { Song } from "./styles";

type Props = {
  data: ResponsePlaylistProps;
};

export function SongBox({ data }: Props) {
  return (
    <Song>
      <SongInfo imageUrl={data.images[0].url} name={data.name} />
    </Song>
  );
}

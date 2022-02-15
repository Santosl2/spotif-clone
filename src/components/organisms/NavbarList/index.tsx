import { Container } from "./styles";
import { BsHouseDoor } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import { VscLibrary } from "react-icons/vsc";
import { AiOutlinePlus, AiOutlineHeart } from "react-icons/ai";
import { ResponsePlaylistProps } from "@/shared/interfaces/Playlist";
import { Divider } from "@/components/atoms";

type Props = {
  data: ResponsePlaylistProps[];
};

export function NavbarList({ data }: Props) {
  return (
    <Container>
      <li>
        <BsHouseDoor size={24} />
        Home
      </li>
      <li>
        <RiSearchLine size={24} />
        Search
      </li>
      <li>
        <VscLibrary size={24} />
        Your library
      </li>
      <Divider />
      <li>
        <AiOutlinePlus size={24} />
        Create Playlist
      </li>
      <li>
        <AiOutlineHeart size={24} />
        Liked Songs
      </li>
      <Divider withBackground />
      {data?.map((el) => {
        return <li key={el.id}>{el.name}</li>;
      })}
    </Container>
  );
}

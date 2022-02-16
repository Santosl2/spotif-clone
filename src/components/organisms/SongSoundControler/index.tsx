import { Container } from "./styles";

import { BiMicrophone } from "react-icons/bi";
import { MdFullscreen, MdOutlineQueueMusic } from "react-icons/md";
export function SongSoundControler() {
  return (
    <Container>
      <BiMicrophone />
      <MdFullscreen />
      <MdOutlineQueueMusic />
    </Container>
  );
}

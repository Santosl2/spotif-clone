import { Container } from "./styles";
import { GoPlay } from "react-icons/go";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { FaRandom } from "react-icons/fa";
import { FiRepeat } from "react-icons/fi";
import { Slider } from "@/components/molecules";
import { Divider } from "@/components/atoms";

export function SongPlayer() {
  return (
    <Container>
      <p>
        <FaRandom size={20} />
        <MdSkipPrevious />
        <GoPlay />
        <MdSkipNext />
        <FiRepeat size={20} />
      </p>

      <Slider />
    </Container>
  );
}

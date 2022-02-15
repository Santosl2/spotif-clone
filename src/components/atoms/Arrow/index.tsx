import { ArrowsTypes } from "./interfaces";
import { Container } from "./styles";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

type Props = {
  direction: ArrowsTypes;
};

export function Arrow({ direction }: Props) {
  return (
    <Container>
      {!direction ? (
        <MdKeyboardArrowLeft size={24} />
      ) : (
        <MdKeyboardArrowRight size={24} />
      )}
    </Container>
  );
}

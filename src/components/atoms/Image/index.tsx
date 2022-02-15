import { ImageContainer } from "./styles";

export function ImageBox({ ...props }) {
  return (
    <ImageContainer>
      <img {...props} />
    </ImageContainer>
  );
}

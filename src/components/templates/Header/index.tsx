import { Arrow, Button } from "@/components/atoms";
import { ArrowsTypes } from "@/components/atoms/Arrow/interfaces";
import { Container, LeftContent, RightContent } from "./styles";

export function Header() {
  return (
    <Container bgActive={false} id="header">
      <LeftContent>
        <Arrow direction={ArrowsTypes.LEFT}></Arrow>
        <Arrow direction={ArrowsTypes.RIGHT}></Arrow>
      </LeftContent>
      <RightContent>
        <Button>Matheus Filype</Button>
      </RightContent>
    </Container>
  );
}

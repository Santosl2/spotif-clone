import { DividerProps } from "./interface";
import { Container } from "./styles";

export function Divider({ withBackground }: DividerProps) {
  return <Container withBackground={withBackground}></Container>;
}

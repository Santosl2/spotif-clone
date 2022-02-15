import styled from "styled-components";
import { DividerProps } from "./interface";

export const Container = styled.div<DividerProps>`
  margin: 1rem;
  width: 90%;
  height: 1px;

  background-color: ${(props) =>
    props.withBackground ? "grey" : "transparent"};
`;

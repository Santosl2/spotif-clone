import styled from "styled-components";

type Props = {
  bgActive: boolean;
};

export const Container = styled.header<Props>`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: red;
  display: flex;
  justify-content: space-between;
  grid-area: HD;
  position: sticky;
  align-items: center;

  background-color: ${(props) =>
    props.bgActive ? "var(--brown-1)" : "var(--dark-3)"};
`;

export const LeftContent = styled.div`
  padding-left: 1rem;
  display: flex;
  align-items: center;
`;

export const RightContent = styled.div`
  padding-right: 1rem;
`;

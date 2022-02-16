import styled from "styled-components";

export const Container = styled.nav`
  background-color: var(--dark-1);
  width: 100%;
  height: 100%;
  color: white;
  grid-area: FN;
  padding: 1rem;

  #friendHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #eee;

    svg {
      font-size: 24px;
    }
  }
`;

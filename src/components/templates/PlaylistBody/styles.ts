import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  background: var(--dark-2);
  grid-area: PL;
  padding: 1.5rem 2rem;
  color: white;

  h1 {
    font-weight: 600;
    font-family: "Open Sans", sans-serif;
  }

  .flex {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    > div {
      flex-basis: 280px;
      flex-grow: 1;
    }
  }
`;

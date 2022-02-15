import styled from "styled-components";

export const Container = styled.ul`
  padding: 1rem;
  list-style: none;

  li {
    margin: 1rem;
    filter: brightness(0.7);
    cursor: pointer;
    transition: filter 0.2s ease-in;
    font-weight: bold;
    display: flex;
    align-items: center;
    font-size: 0.875rem;

    svg {
      margin-right: 1rem;
    }

    &:hover {
      filter: brightness(1);
    }
  }
`;

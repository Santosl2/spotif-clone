import styled from "styled-components";

export const Info = styled.header`
  background: var(--dark-0);
  border-radius: 4px;
  margin: 0 1rem 1rem 0;
  cursor: pointer;
  transition: background 0.3s ease-out;
  font-weight: bold;
  display: flex;
  align-items: center;
  height: 90px;

  &:hover {
    background: var(--dark-0-hover);
  }
`;

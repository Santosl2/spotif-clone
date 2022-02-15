import styled from "styled-components";

export const Container = styled.div`
  background: var(--dark-0);
  border-radius: 4px;
  margin: 0 1rem 1rem 0;
  cursor: pointer;
  transition: background 0.3s ease-out;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  height: 300px;
  padding: 1rem;

  img {
    width: 100%;
    height: 200px;
    border-radius: 3px;
    object-fit: contain;
  }

  p {
    font-size: 14px;
  }

  small {
    height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 300;
    font-size: 12px;
  }

  &:hover {
    background: var(--dark-0-hover);
  }
`;

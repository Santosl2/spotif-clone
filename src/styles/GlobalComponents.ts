import styled from "styled-components";

// NV => Navbar
// PL => Playlist
// HD => Header
// FN => Friend Nav
// SI => Song Info

export const Main = styled.main`
  display: grid;
  grid-template-areas:
    "NV HD FN"
    "NV PL FN"
    "SI SI SI ";

  grid-template-columns: 250px auto 250px;
  grid-template-rows: 70px auto 70px;
  height: 100vh;
`;

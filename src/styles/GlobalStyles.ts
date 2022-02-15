import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   * {
       box-sizing: border-box;
       margin: 0;
       padding: 0;
   }

   :root {
       --green-1: #57B65F;
       --dark-0:rgba(56,53,51,255);
       --dark-0-hover: #414444;
       --dark-1: #000000;
       --dark-2: #131717;
       --dark-3:#070707;
       --boxDark: #181818;
       --brown-1: rgb(100,84,76)
   }

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: var(--dark-0);
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

   body {
    font-family: 'Open Sans', sans-serif;
   }
`;

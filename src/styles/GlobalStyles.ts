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
       --brown-1: rgb(100,84,76)
   }

   body {
    font-family: 'Open Sans', sans-serif;
   }
`;

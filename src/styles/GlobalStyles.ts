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

   input[type=range] {
     -webkit-appearance: none;
  width: 100%;
  height: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
    border-radius: 20px;

  &:hover {
    ::-webkit-slider-thumb {
      opacity: 1;
    }
    opacity: 1;
  }

&::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  background: white;
  border-radius: 100%;
  cursor: pointer;
  opacity: 0;
}

&::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #04AA6D;
  cursor: pointer;
}

&::-moz-range-track {
  background-color: red !important;
}


   }
`;

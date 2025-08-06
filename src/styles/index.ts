import styled, { createGlobalStyle } from 'styled-components'
import {CORES} from "./theme.ts";

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    background-color: ${CORES.secundaria};
    color: ${CORES.primaria};
  }
  
  .container {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
  }
`


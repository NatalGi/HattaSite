import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 80px 65px 0;
    font-family: 'Montserrat';
  }

  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat';
  }

  ul {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export default GlobalStyles;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Nanum Gothic";       
    src: url("/fonts/NanumGothic.ttf"); 
  }

  * {
    font-family: 'Nanum Gothic', sans-serif;
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
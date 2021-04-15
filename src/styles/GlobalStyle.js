import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR';
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: initial;
  }
`;

export default GlobalStyle
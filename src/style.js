import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

   @font-face {
      font-family: 'texgyreheros';
      src: url(../fonts/texgyreheros-bold-webfont.woff) format('woff'),
           url(../fonts/texgyreheros-bolditalic-webfont.woff) format('woff'),
           url(../fonts/texgyreheros-italic-webfont.woff) format('woff'),
           url(../fonts/texgyreheros-regular-webfont.woff) format('woff'),
   }

  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-family: 'texgyreheros', sans-serif;
  }
  
  .container{
    margin: auto;
    width: 1600px;
  }
`;

export default GlobalStyles;
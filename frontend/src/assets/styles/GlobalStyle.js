import { createGlobalStyle } from 'styled-components';
import { colors, metrics } from '.';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
  }

  html, body, #root {
    width: 100%;
    height: auto;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  body {
    background: ${colors.secondary};
    color: ${colors.primary};
    font: ${metrics.font_weight.normal} ${metrics.font_size.medium}rem Poppins;
  }

  button {
    cursor: pointer;
    background: none;
  }

  a {
    text-decoration: none;
  }

  .container{
    width: 80%;
    max-width: 1080px;
  }

  :root{
    font-size: 62.5%;
  }

  @media(max-width: 840px){
    :root{
      font-size: 52.5%;
    }
  }

`;

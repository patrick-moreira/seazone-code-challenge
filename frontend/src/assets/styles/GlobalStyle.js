import { createGlobalStyle } from 'styled-components';
import { colors } from '.';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    max-width: 100vw;
    max-height: 100vh;
    width: 100%;
    height: 100%;
  }

  body {
    background: ${colors.secondary};
    color: ${colors.primary};
    font: 400 1rem Poppins;
    border: 0;
  }

  button {
    cursor: pointer;
    background: none;
    border: 0;
  }

  input {
    border: 0;
  }

  a {
    text-decoration: none;
  }

  @media(max-width: 840px){
    :root{
      font-size: 62.5%;
    }
  }
`;

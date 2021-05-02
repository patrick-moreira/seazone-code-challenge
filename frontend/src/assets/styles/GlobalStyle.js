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

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    cursor: pointer;
    background: none;
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

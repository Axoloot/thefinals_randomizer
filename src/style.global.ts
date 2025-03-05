import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    overflow: hidden;
    background: radial-gradient(#94A5B7, #6D7685);
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }

  body > #root > div {
    height: 100svh;
    width: 100svw;
  }

`;

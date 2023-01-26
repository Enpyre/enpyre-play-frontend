import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.family};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html {
    height: 100vh;
  }

  body {
    width: 100%;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.primary.p800};
  }
`;

export default GlobalStyles;

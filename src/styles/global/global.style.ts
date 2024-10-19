import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.colors.text};
  }
  
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    max-width: ${(props) => props.theme.breakpoints.lg};
    margin: 0 auto;
  }

  a {
    color: ${(props) => props.theme.colors.secondary};
    text-decoration: none;
  }
`;

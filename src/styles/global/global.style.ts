import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.colors.text};
  }
  h2{
  font-size: 2rem;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    max-width: ${(props) => props.theme.breakpoints.lg};
    margin: 0 auto;
    font-family: 'Noto Sans', sans-serif;
  }

  a {
    color: ${(props) => props.theme.colors.secondary};
    text-decoration: none;
  }
  colors{
  primary: #FFC107,
  secondary: #343A40,
  text: #343A40,
  background: #F8F9FA,
  shadow: #00000029,
  }
`;

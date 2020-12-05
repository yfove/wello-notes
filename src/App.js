import { createGlobalStyle } from "styled-components";

import Header from "./components/Layout/Header";
import Container from "./components/Layout/Container";

export default () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Container>{/* <Lists /> */}</Container>
    </div>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    color: #fff;
    background: green;
    font-size: 16px;
    font-family: 'Livvic';
  }
`;

import React from "react";
import { createGlobalStyle } from "styled-components";

import Header from "./components/Layout/Header";
import Container from "./components/Layout/Container";
import Lists from "./components/Lists";

export default () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Container>
        <Lists />
      </Container>
    </React.Fragment>
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

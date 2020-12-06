import React from "react";
import styled from "styled-components";

export default (props) => {
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
  max-width: 1200px;
  background: rgb(9, 136, 68);
  padding: 0px 10px;
  padding-bottom: 30px;
  margin: 0 auto;
  margin-top: 20px;
  @media (max-width: 1000px) {
    margin-top: 20px;
  }
`;

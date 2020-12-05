import React from "react";
import styled from "styled-components";

export default () => {
  return (
    <Header>
      <div className="text-logo">NoteWell</div>
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0px;
  background: palegreen;
  .text-logo {
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 2px;
  }
`;

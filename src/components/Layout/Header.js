import React from "react";
import styled from "styled-components";

export default () => {
  return (
    <Header>
      <div className="text-logo">NoteWell.</div>
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0px;
  // background: rgb(15, 155, 80);
  .text-logo {
    font-size: 2.5rem;
    font-weight: bold;
    letter-spacing: 2px;
  }
`;

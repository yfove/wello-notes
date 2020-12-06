import React, { useState } from "react";
import styled from "styled-components";

export default (props) => {
  // setState
  const [add, setAdd] = useState(false);
  const [message, setMessage] = useState("");

  //   input card functions
  const submitMessage = () => {
    const json = localStorage.getItem("lists");
    const list = JSON.parse(json);
    list[props.category].cards.push(message);
    props.updateList(list);
    setAdd(false);
  };

  return (
    <AddCard>
      {add === true ? (
        <React.Fragment>
          <textarea
            className="input"
            placeholder="Add your Notes Here"
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="buttons">
            <button onClick={submitMessage} className="button">
              Add
            </button>
            <button onClick={() => setAdd(false)} className="button">
              Cancel
            </button>
          </div>
        </React.Fragment>
      ) : (
        <button onClick={() => setAdd(!add)} className="button">
          Add A New Note
        </button>
      )}
    </AddCard>
  );
};

// styling

const AddCard = styled.div`
  display: flex;
  padding: 5px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  cursor: pointer;
  background: rgba(19, 19, 19, 0.08);
  .input {
    display: flex;
    padding: 50px 10px;
    border: none;
    outline: none;
    resize: none;
    border-radius: 3px;
    min-width: 85%;
    background: rgb(202, 255, 227);
  }
  .button {
    width: 95%;
    padding: 10px 20px;
    margin: 2px;
    border: none;
    outline: none;
    background: rgba(19, 19, 19, 0.2);
    color: #fff;
    cursor: pointer;
  }
  .buttons {
    margin-top: 5px;
    display: flex;
    .button {
      width: 100%;
    }
  }
`;

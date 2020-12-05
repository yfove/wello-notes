import React, { useState } from "react";
import styled from "styled-components";

export default () => {
  // setState
  const

  //   input card functions
  const submitMessage = () => {
    const json = localStorage.getItem('lists');
    const list = JSON.parse(json);
    list[props.category].cards.push(message);
    props.updateList(list);
    setAdd(false);
  }
  return (<AddCard>
    { add === true ? (
      <React.Fragment>
        <textarea 
          className="input" 
          placeholder="Card message" 
          rows="3"
          value={message}
          onChange={(e) => setMessage(e.target.value) }  
        />
        <div className="buttons">
          <button onClick={submitMessage} className="button">Add</button>
          <button onClick={() => setAdd(false)} className="button">Cancel</button>
        </div>
      </React.Fragment>
    ) : <button onClick={() => setAdd(!add)} className="button">Add A New Note</button> }
  </AddCard>)
}

// styling

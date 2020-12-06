import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Import from inputs
import ListInput from "./Inputs/List";
import CardInput from "./Inputs/Card";

export default () => {
  // setState
  const [lists, setLists] = useState([]);
  useEffect(() => {
    let json = localStorage.getItem("lists");
    setLists(json === null ? [] : JSON.parse(json));
    if (json === null) localStorage.setItems("lists", JSON.stringify([]));
  }, []);

  //   CRUD Funtions
  const updateList = (data) => {
    setLists(data);
    saveList(data);
  };

  //   need to add delete funciton

  const saveList = (data) =>
    localStorage.setItems("lists", JSON.stringify(data));

  return (
    <List>
      <ListInput updateList={updateList} />
      <div className="categories">
        {lists.map((category, index) => {
          return (
            <div className="category">
              <div className="title">
                {/* for our delete Function */}
                <i className="fa fa-trash-o icon"></i>
                <div className="text">{category.title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </List>
  );
};

// need to display lists when input
// card will be added to this list
// how to order them keep id (uuid????)

//styling
const List = styled.div`
  background: blue;
`;

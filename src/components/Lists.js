import React, { useEffect } from "react";
import styled from "styled-components";

// Import from inputs
import ListInput from "./Inputs/List";
import CardInput from "./Inputs/Card";

export default () => {
  // setState
  const [setLists] = useState([]);
  useEffect(() => {
    let json = localStorage.getItem("lists");
    setLists(json === null ? [] : JSON.parse(json));
    if (json === null) localStorage.setItem("lists", JSON.stringify([]));
  }, []);

  //   CRUD Funtions
  const updateList = (data) => {
    setLists(data);
    saveList(data);
  };

  return (
    <List>
      <ListInput updateList={updateList} />
    </List>
  );
};

//styling

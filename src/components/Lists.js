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
  const deleteList = (index) => {
    let newList = lists.filter((item, ix) => ix !== index);
    setLists(newList);
    saveList(newList);
  };

  const saveList = (data) =>
    localStorage.setItem("lists", JSON.stringify(data));

  return (
    <List>
      <ListInput updateList={updateList} />
      <div className="categories">
        {lists.map((category, index) => {
          return (
            <div key={index} className="category">
              <div className="title">
                {/* for our delete Function */}
                <i
                  onClick={() => {
                    deleteList(index);
                  }}
                  className="fa fa-trash-o icon"
                ></i>
                <div className="text">{category.title}</div>
              </div>
              <CardInput category={index} updateList={updateList} />
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
  background: pale-blue;
  margin-top: 5px;
  .categories {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    .category {
      flex-basis: 24%;
      background: rgba(19, 19, 19, 0.2);
      min-height: 80px;
      box-sizing: content-box;
      margin: 5px;
      padding-bottom: 5px;
      margin-bottom: 10px;
      @media (max-width: 1000px) {
        flex-basis: 100%;
        min-height: 120px;
      }
      .title {
        position: relative;
        font-weight: bold;
        font-size: 18px;
        background: rgba(19, 19, 19, 0.3);
        padding: 10px 5px;
        display: flex;
        padding-right: 25px;
        word-break: break-all;
        .icon {
          position: absolute;
          right: 10px;
          top: 10px;
          color: #fff;
        }
        .text {
          margin-left: 4px;
        }
      }
    }
  }
`;

import React from "react";

export default () => {
  const [add, setAdd] = useState(false);
  const [title, setTitle] = useState("");

  function submitList() {
    if (title.length < 3)
      return alert("The title must contain at least 3 characters.");
    let json = localStorage.getItem("lists");
    let list = JSON.parse(json);
    list.push({
      title: title,
      cards: [],
    });
    localStorage.setItem("lists", JSON.stringify(list));
    setAdd(false);
    props.updateList(list);
  }

  return (
    <Input>
      {add === true ? (
        <React.Fragment>
          <input
            className="input"
            type="text"
            placeholder="List title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={submitList} className="button">
            Add
          </button>
          <button onClick={() => setAdd(false)} className="button">
            Cancel
          </button>
        </React.Fragment>
      ) : (
        <div onClick={() => setAdd(true)} className="add-more">
          <i className="fa fa-plus" aria-hidden="true"></i> Add another list
        </div>
      )}
    </Input>
  );
};

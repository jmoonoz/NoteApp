import React from "react";

function Note(props) {
  // handle the delete button click
  function handleClick() {
    props.onDelete(props.id);
    console.log("item deleted");
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;

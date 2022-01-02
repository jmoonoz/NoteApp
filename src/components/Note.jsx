import React from "react";

function Note(props) {
  // handle the delete button click
  function handleClick() {
    props.onDelete(props.id);
    console.log("item deleted");
  }
  return (
    <Container className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </Container>
  );
}

export default Note;

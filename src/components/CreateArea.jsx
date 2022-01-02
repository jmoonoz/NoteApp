import React, { useState } from "react";
import { Container, Form } from "reactstrap";

function CreateArea(props) {
  // state is established here with two properties, title and content
  // to start off they will be blank
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  // function to handle the change within the input is triggered
  function handleChange(event) {
    // destructor object in reaching the state
    const { name, value } = event.target;
    //what receives the previous note and adds the new notes
    setNote((prevNote) => {
      return {
        // spread operator to add all previosu notes
        ...prevNote,
        // the [] turns the name key from string into a value from the constant
        [name]: value
      };
    });
  }

  function submitNote(event) {
    //passing back the currently created note
    props.onAdd(note);
    // this will clear the text box when a new note is added
    setNote({
      title: "",
      content: ""
    });

    // this prevents the page refreshing after a note is added
    event.preventDefault();
  }

  return (

    <Container>
        <Form>
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            required />
          <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows="3"
            required />
          <button onClick={submitNote}>Add</button>
        </Form>
    </Container>

  );
}

export default CreateArea;

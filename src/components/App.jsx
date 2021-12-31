import React, { useState } from "react";
import '../style/styles.css';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // to add notes to an array and initalizes to a blank array
  const [notes, setNotes] = useState([]);

  //receives a note object
  function addNote(newNote) {
    setNotes((prevNotes) => {
      // updates the state note to add new notes
      //with the spread operator and the newNotes
      // its passed from the create area submitNote function when it addNotes
      // it returns the new notes array
      return [...prevNotes, newNote];
    });
  }

  // delete the note from the array with the Key ID
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      {/* prop called onAdd passes a function to create area */}
      <CreateArea onAdd={addNote} />
      {/* here will be maoing the nots array and created a new note pad for each note that is added */}
      {/* index will be used for the key and id to idnetify the loaction in the array */}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { Link } from "react-router-dom";

interface NotePageProps {
  match: any;
  history: any;
}

const NewNotePage = ({ match, history }: NotePageProps) => {
  const [note, setNote] = useState<any>();

  const url = "http://127.0.0.1:8000/api/notes";

  const createNote = async () => {
    if (note.body === '') return 
 
    fetch(`${url}/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    }).then(() => {
      history.push('/')
    })
  };

  return (
    <div className="note">
      <div className="note-header">
        <h2>Add New Note</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <h4 onClick={createNote}>
            <span style={{ padding: "0 10px 6px 0" }}>Add</span>
          </h4>
          <Link to="/">
            <h4>Go Back</h4>
          </Link>
        </div>
      </div>
      <textarea
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
        placeholder="Add Note"
      ></textarea>
    </div>
  );
};

export default NewNotePage;

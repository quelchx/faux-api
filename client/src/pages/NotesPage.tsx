import React, { useEffect, useState } from "react";
import AddButton from "../components/AddButton";

import Note from "../components/Note";
import { NoteProps } from "../types";

const NotesPage = (): JSX.Element => {
  const [notes, setNotes] = useState<NoteProps[]>([]);
  const [error, setError] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getNotes();
    setLoading(false);
  }, []);

  const getNotes = async () => {
    try {
      let res: Response = await fetch("http://127.0.0.1:8000/api/notes");
      let data: [] = await res.json();
      setNotes(data);
    } catch (err: any) {
      setError(err);
    }
  };

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
        <AddButton />
      </div>
      <div className="notes-list">
        {notes.map((note: NoteProps): JSX.Element => {
          return (
            <div key={note.id}>
              <Note note={note} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NotesPage;

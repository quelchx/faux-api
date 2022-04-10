import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface NotePageProps {
  history: any;
  match: any;
}

const NotePage = ({ match, history }: NotePageProps): JSX.Element => {
  const [note, setNote] = useState<any>();
  const [isLoading, setLoading] = useState(true);

  const url = "http://127.0.0.1:8000/api/notes/";
  const noteid = match.params.id;

  useEffect(() => {
    getNote();
  }, []);

  const getNote = async () => {
    let res = await fetch(`${url}${noteid}`);
    let data = await res.json();
    setNote(data);
    setLoading(false);
  };

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  const updateNote = async () => {
    fetch(`${url}${noteid}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  const deleteNote = async () => {
    fetch(`${url}${noteid}/delete/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.push("/");
    });
  };

  const handleSubmit = () => {
    updateNote();
    history.push("/");
  };

  return (
    <div className="note">
      <div className="note-header">
        <Link to="/">
          <h3>
            <span style={{ padding: "0 10px 4px 0" }}>&#x2190;</span> Go Back
          </h3>
        </Link>
        <div style={{ display: "flex", gap: "10px" }}>
          <h3 onClick={handleSubmit}>
            <span style={{ padding: "0 10px 6px 0" }}>&#x2713;</span>
          </h3>
          <h3 onClick={deleteNote}>
            <span style={{ padding: "0 10px 6px 0" }}>&#xd7;</span>
          </h3>
        </div>
      </div>
      <textarea
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
        defaultValue={note?.body}
      ></textarea>
    </div>
  );
};

export default NotePage;

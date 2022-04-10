import { Link } from "react-router-dom";
import { Notes } from "../types";

const Note = ({ note }: Notes): JSX.Element => {
  return (
    <Link to={`note/${note.id}`}>
      <div className="notes-list-item">
        <h3>{note.body}</h3>
      </div>
    </Link>
  );
};

export default Note;

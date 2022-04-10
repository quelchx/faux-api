import React from "react";
import { Link } from "react-router-dom";

const AddButton = (): JSX.Element => {
  return (
    <div className="floating-button">
      <Link to="/add-note" style={{ padding: "0 0 8px 0" }}>
        &#x2b;
      </Link>
    </div>
  );
};

export default AddButton;

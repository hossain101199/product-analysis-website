import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="notfound">
      <h1>404</h1>
      <h5>PAGE NOT FOUND</h5>
      <Link to="/HOME">
        <button>GO BACK HOME</button>
      </Link>
    </div>
  );
};

export default NotFound;

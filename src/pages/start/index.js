import React from "react";
import { Link } from "react-router-dom";
import "./start.css";

export const Start = () => {
  return (
    <div className="start">
      <Link to="/">
        <button className="click-here-button">Click here to START!</button>
      </Link>
    </div>
  );
};

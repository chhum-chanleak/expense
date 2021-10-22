import React from "react";
import { Link } from "react-router-dom";
import "./start.css";

export const Start = () => {
  return (
    <div className="start">
      <Link to="/">
        <i class="bi bi-arrow-right"></i>
        <button className="click-here-button">Click here to Start!</button>
      </Link>
    </div>
  );
};

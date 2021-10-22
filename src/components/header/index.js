import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <Link to="/expense/">
          <div className="header-logo">
            <label>Expense-Tracker</label>
            <i class="bi bi-bag-fill"></i>
          </div>
        </Link>
        <Link to="/about">
          <div className="header-button">
            <i class="bi bi-file-person"></i>About
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

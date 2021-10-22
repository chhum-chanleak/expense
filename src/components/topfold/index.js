import React, { useState } from "react";
import "./topfold.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchExpense } from "../../redux/actions/expenses";

const TopFold = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleQuery = (e) => {
    setQuery(e.target.value);
    dispatch(searchExpense(e.target.value));
  };
  return (
    <div className="topfold">
      {window.location.pathname === "/expense/" ? (
        <div className="home-topfold">
          <div className="search-bar">
            <i class="bi bi-search"></i>
            <input
              value={query}
              placeholder="Search for expenses"
              onChange={(e) => handleQuery(e)}
            />
          </div>
          <Link to="/add-expense">
            <div className="add-button">
              <label>Add</label>
              <i class="bi bi-plus-circle-fill"></i>
            </div>
          </Link>
        </div>
      ) : (
        <div className="add-topfold">
          <Link to="/expense">
            {" "}
            <div className="add-topfold-button">
              <label>Go Back</label>
            </div>
          </Link>
          <Link to="/expense">
            <div className="add-topfold-button">
              <label>Cancel</label>
              <i class="bi bi-x-octagon-fill"></i>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TopFold;

import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="back-button">
        <Link to="/">
          <button>Go Back</button>
        </Link>
      </div>

      <div className="about-info">
        <p>
          Welcome to Expense-Record site. First of all, my name is Chhum
          Chanleak. I created this site using React.js, Bootstrap and a few
          Libraries. This site can be used to track your purchases. For example,
          it tracks the name, price and the time when enter the expense
          information. Moreover, you can as well search the expenses information
          that you provided using Search Bar.
        </p>
      </div>
    </div>
  );
};
export default About;

import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Landing = () => (
  <Fragment>
    <div className="landing-container">
      <h1 className="welcome">Welcome To Gamer Facts</h1>
      <div className="button-list">
        <ul>
          <li>
            <Link className="badge" to="/login">
              Login
            </Link>
            <Link className="badge" to="/register">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </Fragment>
);

export default Landing;

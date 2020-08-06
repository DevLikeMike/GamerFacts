import React, { Fragment } from "react";

const Landing = () => (
  <Fragment>
    <div className="landing-container">
      <h1 className="welcome">Welcome To Gamer Facts</h1>
      <div className="button-list">
        <ul>
          <li>
            <a className="badge" href="/">
              Login
            </a>
            <a className="badge" href="/">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </div>
  </Fragment>
);

export default Landing;

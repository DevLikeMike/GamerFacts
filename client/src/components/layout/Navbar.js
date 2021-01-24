import React, { Fragment, useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);

  let { isAuthenticated, logout, user } = authContext;
  let name;
  if (user) {
    name = user.name;
  }

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li id='greeting'>
        Welcome <span id='greetingName'>{name}</span>
      </li>
      <li>
        <a onClick={onLogout} href='/'>
          <i className='fas fa-sign-out-alt'></i>
          <span>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar'>
      <Link to={isAuthenticated ? "/games" : "/"}>
        <h1 id='nav-title'>
          <i className={icon} /> <span id='title-text'>{title}</span>
        </h1>
      </Link>
      <ul className='navRight'>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "GamerFacts",
  icon: "fas fa-gamepad",
};

export default Navbar;

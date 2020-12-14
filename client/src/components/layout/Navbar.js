import React, { Fragment, useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  let { isAuthenticated, logout, user } = authContext;
  let name;
  //Capitalize first letter in user name
  if (user) {
    name = user.name.charAt(0).toUpperCase() + user.name.slice(1);
  }

  const onClick = (e) => {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
      setOpen(!open);
  }

  const onLogout = () => {
    logout();
    onClick();
  };

  const authLinks = (
    <Fragment>
      <li id="greeting">Welcome {name}</li>
      <li>
        <a onClick={onLogout} href="/">
          <i className="fas fa-sign-out-alt"></i>
          <span>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register" onClick={onClick}>Register</Link>
      </li>
      <li>
        <Link to="/login" onClick={onClick}>Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar">
      <Link to={isAuthenticated ? "/games" : "/"}>
        <h1 id="nav-title">
          <i className={icon} /> {title}
        </h1>
      </Link>
      <ul className="navRight">{isAuthenticated ? authLinks : guestLinks}</ul>
      <div id="hburger-container" className={open ? "hburger-container open" : "hburger-container"} onClick={onClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="sideBar" className={open ? "sideBarOpen" : "sideBarNotOpen"}>
        <div id="hburger-container" className={open ? "hburger-container open" : "hburger-container"} onClick={onClick}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
      </div>
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

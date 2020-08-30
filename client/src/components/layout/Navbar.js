import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import GamesContext from "../../context/games/gamesContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const gamesContext = useContext(GamesContext);

  const { isAuthenticated, logout, user } = authContext;
  // const { clearGames } = gamesContext;

  const onLogout = () => {
    logout();
    // clearContacts();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <Link to="/games">Game Reviews</Link>
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
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar">
      <Link to="/">
        <h1 id="nav-title">
          <i className={icon} /> {title}
        </h1>
      </Link>

      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
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

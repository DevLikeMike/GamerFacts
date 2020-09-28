import React, { useState, useContext, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";

const Login = (props) => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      // Redirect after authentication
      props.history.push("/games");
    }

    if (error === "Invalid Credentials") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please enter both EMAIL and PASSWORD", "danger");
    } else {
      login({
        email,
        password,
      });
    }
  };

  return (
    <Fragment>
      <div className="form-wrapper flex flex-center col">
        <h1 className="authHeader">Account Login</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Please enter your Email"
              value={email}
              onChange={onChange}
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
            />
          </div>
          <input type="submit" value="Login" className="btn" />
        </form>
        <Link to="/register" className="text-center">
          Create Account
        </Link>
      </div>
    </Fragment>
  );
};

export default Login;

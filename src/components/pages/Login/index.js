import React, { Fragment, useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import UserContext from "../../../utils/UserContext";
import {
  signInWithEmailPassword,
  signInWithGoogle,
} from "../../../utils/authenticate";

function Login() {
  const userContext = useContext(UserContext);

  const { isAuthenticated } = userContext;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    code: "",
    message: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    signInWithEmailPassword(formData.email, formData.password, setError);
  };

  const googleSignInOnClick = () => {
    signInWithGoogle();
  };

  return isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <Fragment>
      {error.code || error.message ? (
        <div
          className="alert alert-danger alert-dismissible m-3 fade show"
          role="alert"
        >
          {error.message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => {
              setError({
                code: "",
                message: "",
              });
            }}
          ></button>
        </div>
      ) : (
        ""
      )}
      <main className="bg-light h-100">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="row gy-3">
                <div className="col-12">
                  <div className="text-center">
                    <h3>
                      <strong>Login</strong>
                    </h3>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card shadow">
                    <div className="card-body">
                      <form method="post" onSubmit={onSubmit}>
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            placeholder="Email Address"
                            onChange={onChange}
                          />
                          <label htmlFor="email">Email Address</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={onChange}
                          />
                          <label htmlFor="password">Password</label>
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                          <button
                            type="button"
                            className="btn btn-outline-dark"
                            onClick={googleSignInOnClick}
                          >
                            Sign In with Google{" "}
                            <i className="fab fa-google"></i>
                          </button>
                          <button type="submit" className="btn btn-primary">
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="text-center">
                    <Link to="/register">Register Here</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Login;

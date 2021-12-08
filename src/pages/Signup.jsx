import React, { useState } from "react";
import styles from "../styles/signup.module.css";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [values, setValues] = useState({
    Email: "",
    Password: "",
    Username: "",
    ConfirmPassword: "",
    loginType: "ServiceProvider",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSignup = () => {
    if (
      !values.Password||
      !values.Username ||
      !values.Email
    ) {
      setError("Email, username and password are mandatory to fill!");
      return;
    }
    if (values.Password !== values.ConfirmPassword) {
      setError("Password and confirm password should match!");
      return;
    }
    setLoading(true)
    Auth.signUp({
      username: values.Username,
      password: values.Password,
      attributes: {
        email: values.Email,
        "custom:userType": values.loginType,
      },
    }).then((res) => {
      setLoading(false)
      navigate("/login")
    }).catch((err) => {
      setLoading(false)
      setError(err.message)
    });
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.title}>Sign Up</div>
      {error && <p className={styles.errorMessage}>{error}</p>}
      <div className={styles.form}>
        <div>
          Username
          <br />
          <input
            type="text"
            name="Username"
            className={styles.input}
            onChange={handleChange}
          />
        </div>
        <div>
          Email
          <br />
          <input
            type="text"
            name="Email"
            className={styles.input}
            onChange={handleChange}
          />
        </div>
        <div>
          User type
          <br />
          <select
            name="loginType"
            className={`form-control ${styles.input} ${styles.select}`}
            onChange={handleChange}
          >
            <option value="ServiceProvider">Service Provider</option>
            <option value="Client">Client</option>
          </select>
        </div>
        <div />
        <div>
          Password
          <br />
          <input
            type="text"
            name="Password"
            className={styles.input}
            onChange={handleChange}
          />
        </div>
        <div>
          Confirm password
          <br />
          <input
            type="text"
            name="ConfirmPassword"
            className={styles.input}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles.submitContainer}>
        <button className={styles.signUpButton} disabled={loading} onClick={handleSignup}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;

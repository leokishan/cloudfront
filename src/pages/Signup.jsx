import React from "react";
import styles from "../styles/signup.module.css";

const Signup = (props) => {
  return (
    <div className={styles.signupContainer}>
      <div className={styles.title}>Sign Up</div>
      <div className={styles.form}>
        <div>
          First Name
          <br />
          <input type="text" name="First Name" className={styles.input} />
        </div>
        <div>
          Last Name
          <br />
          <input type="text" name="Last Name" className={styles.input} />
        </div>
        <div>
          Username
          <br />
          <input type="text" name="Username" className={styles.input} />
        </div>
        <div>
          Email
          <br />
          <input type="text" name="Email" className={styles.input} />
        </div>
        <div>
          Date of birth
          <br />
          <input type="text" name="Date of birth" className={styles.input} />
        </div>
        <div>
          Phone number
          <br />
          <input type="text" name="Phone number" className={styles.input} />
        </div>
        <div>
          Password
          <br />
          <input type="text" name="Password" className={styles.input} />
        </div>
        <div>
          Confirm password
          <br />
          <input type="text" name="Confirm password" className={styles.input} />
        </div>
      </div>
        <div className={styles.submitContainer}>
          <button className={styles.signUpButton}>Sign Up</button>
        </div>
    </div>
  );
};

export default Signup;

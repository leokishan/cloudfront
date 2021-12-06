import React from "react";
import styles from "../styles/login.module.css";

const Login = (props) => {
  return (
    <div className={styles.signinContainer}>
      <div className={styles.title}>Login</div>
      <div className={styles.form}>
        <div>
          <input type="text" name="username" placeholder="Username" className={styles.input} />
        </div>
        <div>
          <input type="text" name="password" placeholder="Password" className={styles.input} />
        </div>
      </div>
        <div className={styles.submitContainer}>
          <button className={styles.signinButton}>Sign in</button>
        </div>
    </div>
  );
};

export default Login;

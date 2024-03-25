import React from "react";
import styles from "./Form.module.scss";

const Form = ({ username, handleChange }) => {
  return (
    <form className={styles.form}>
      <label htmlFor="userName">
        Digite seu username do Github{" "}
        <i className="devicon-github-original"></i>{" "}
      </label>
      <input
        id="userName"
        type="text"
        onBlur={handleChange} // Passe a função handleChange para manipular as mudanças
      />
    </form>
  );
};

export default Form;

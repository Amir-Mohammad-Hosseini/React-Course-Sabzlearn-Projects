import React, { useState } from "react";

const Register = ({ onChangeType }) => {
  const [nameInput, setNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const registerHandler = (event) => {
    event.preventDefault();
    console.log(
      `You logged in as ${nameInput} with password ${passwordInput} bu email ${emailInput}`,
    );
  };
  return (
    <form className="register-form" onSubmit={registerHandler}>
      <input
        value={nameInput}
        onChange={(event) => setNameInput(event.target.value)}
        type="text"
        placeholder="name"
      />
      <input
        value={passwordInput}
        onChange={(event) => setPasswordInput(event.target.value)}
        type="password"
        placeholder="password"
      />
      <input
        value={emailInput}
        onChange={(event) => setEmailInput(event.target.value)}
        type="text"
        placeholder="email address"
      />
      <button type="submit">create</button>
      <p className="message" onClick={onChangeType}>
        Already registered? <a href="#">Sign In</a>
      </p>
    </form>
  );
};

export default Register;

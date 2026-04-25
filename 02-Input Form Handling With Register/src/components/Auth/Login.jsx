import React, { useState } from "react";

const Login = ({ onChangeType }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = (event) => {
    event.preventDefault();
    console.log(`You logged in as ${username} with password ${password}`);
  };
  return (
    <form className="login-form" onSubmit={loginHandler}>
      <input
        value={username}
        type="text"
        placeholder="username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        value={password}
        type="password"
        placeholder="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button type="submit">login</button>
      <p className="message" onClick={onChangeType}>
        Not registered? <a href="#">Create an account</a>
      </p>
    </form>
  );
};

export default Login;

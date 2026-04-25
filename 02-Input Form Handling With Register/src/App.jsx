import { useState } from "react";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import "./App.css";

function App() {
  const [formType, setFormType] = useState("login");

  const changeFormType = () => {
    setFormType((prevType) => (prevType === "login" ? "register" : "login"));
  };


  return (
    <div className="login-page">
      <div className="form">
        {formType === "login" ? (
          <Login onChangeType={changeFormType} />
        ) : (
          <Register onChangeType={changeFormType} />
        )}
      </div>
    </div>
  );
}

export default App;

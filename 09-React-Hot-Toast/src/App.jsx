import { useState } from "react";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleLogin = () => {
    toast.loading("درحال بررسی اطلاعات...", {
      duration: 2000,
    });

    setTimeout(() => {
      if (
        usernameInput.trim().length >= 8 &&
        passwordInput.trim().length >= 8
      ) {
        toast.success("ورود با موفقیت انجام شد");
        return;
      }
      if (usernameInput.trim().length < 8) {
        toast.error("نام کاربری حداقل باید 8 کارکتر باشد");
      }
      if (passwordInput.trim().length < 8) {
        toast.error("گذرواژه حداقل باید 8 کارکتر باشد");
      }
    }, 2000);
  };
  return (
    <>
      <div>
        <div id="form">
          <header id="form-header">
            <h1 id="form-title">خوش آمدید</h1>
            <p id="form-caption">
              به پنل کاربری خود خوش آمدید, لطفا جهت ادامه اطلاعات خود را تکمیل
              نمائید.
            </p>
          </header>
          <main id="form-main">
            <div className="input-field">
              <label htmlFor="username-input" className="input-label">
                نام کاربری:
              </label>
              <input
                type="text"
                className="input-element"
                id="username-input"
                placeholder="لطفا نام کاربری یا شماره موبایل خود را وارد نمائید ..."
                value={usernameInput}
                onChange={(event) => setUsernameInput(event.target.value)}
              />
            </div>
            <div className="input-field">
              <label htmlFor="password-input" className="input-label">
                {" "}
                گذرواژه:{" "}
              </label>
              <input
                type="text"
                className="input-element"
                id="password-input"
                placeholder="********"
                value={passwordInput}
                onChange={(event) => setPasswordInput(event.target.value)}
              />
              <div className="forgot-password-field">
                <span className="link-text"> گذرواژه ام را فراموش کردم </span>
              </div>
            </div>
          </main>
          <footer className="grow space-y-3 w-full!">
            <div className="flex items-center gap-1">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me" className="remember-me-label">
                لطفا مرا به خاطر بسپار.
              </label>
            </div>
            <button onClick={handleLogin} id="submit-button">
              ادامه و ورود
            </button>
            <div className="hasnt-account-field">
              <div className="hasnt-account">
                <p className="field-label">حساب کاربری ندارید؟</p>
                <span className="link-text"> ثبت نام کنید </span>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div id="introduction">
        <img src="/public/images/image.png" className="" alt="" />
      </div>
      <Toaster position="top-left" toastOptions={{ duration: 3000 }} />
    </>
  );
};

export default App;

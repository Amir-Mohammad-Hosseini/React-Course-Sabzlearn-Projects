import { useState } from "react";
import "./App.css";
import swal from "sweetalert";
import { registerSchema } from "./validators/registerValidator.js";
function App() {
  const [registerForm, setRegisterForm] = useState({
    username: "",
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const handleRegister = () => {
    const { username, fullName, phoneNumber, email, password } = registerForm;
    const newUser = { username, fullName, phoneNumber, email, password };
    const registerResult = registerSchema.safeParse(newUser);
    if (!registerResult.success) {
      const issuesMessage = registerResult.error.issues
        .map((issue) => issue.message)
        .join("\n");
      swal({
        title: "ثبت نام موفقیت آمیز نبود",
        text: issuesMessage,
        icon: "error",
        button: "تلاش مجدد",
      });
      return;
    }
    swal({
      title: "ثبت نام با موفقیت انجام شد",
      icon: "success",
      button: "ورود به اکانت",
    });
  };
  return (
    <>
      <div id="wrapper">
        <div id="form-card">
          <div id="image" className="bg-cover bg-center bg-no-repeat">
            <img src="/images/banner.jpg" className="auth-image" alt="" />
          </div>
          <div id="content">
            <div id="header" className="input-field">
              <h1 id="form-title">به پنل سبزلرن خوش آمدید</h1>
              <p id="form-caption">
                لطفا جهت ادامه و یادگیری ادامه دوره ری‌اکت جی‌اس وارد پنل
                کاربری‌تون بشید
              </p>
            </div>
            <div id="main" className="space-y-4">
              <div className="input-field">
                <label htmlFor="fullName" className="input-label">
                  نام کاربری:
                </label>
                <input
                  type="text"
                  value={registerForm.username}
                  onChange={(event) =>
                    setRegisterForm((prevForm) => ({
                      ...prevForm,
                      username: event.target.value,
                    }))
                  }
                  dir="ltr"
                  className="input-element"
                  placeholder="Username"
                />
              </div>
              <div className="input-field">
                <label htmlFor="fullName" className="input-label">
                  نام و نام خانوادگی:
                </label>
                <input
                  type="text"
                  value={registerForm.fullName}
                  onChange={(event) =>
                    setRegisterForm((prevForm) => ({
                      ...prevForm,
                      fullName: event.target.value,
                    }))
                  }
                  className="fullName-input"
                  placeholder="امین سعیدی"
                />
              </div>
              <div className="input-field">
                <label htmlFor="phoneNumber" className="input-label">
                  شماره موبایل:
                </label>
                <input
                  dir="ltr"
                  id="phoneNumber-input"
                  type="tel"
                  value={registerForm.phoneNumber}
                  onChange={(event) =>
                    setRegisterForm((prevForm) => ({
                      ...prevForm,
                      phoneNumber: event.target.value,
                    }))
                  }
                  className="input-element"
                  placeholder="09921902834"
                />
              </div>
              <div className="input-field">
                <label htmlFor="email-input" className="input-label">
                  آدرس ایمیل:
                </label>
                <input
                  type="email"
                  value={registerForm.email}
                  onChange={(event) =>
                    setRegisterForm((prevForm) => ({
                      ...prevForm,
                      email: event.target.value,
                    }))
                  }
                  id="email-input"
                  dir="ltr"
                  className="input-element"
                  placeholder="peymangeek@gmail.com"
                />
              </div>
              <div className="input-field">
                <label htmlFor="password-input" className="input-label">
                  گذرواژه :
                </label>
                <input
                  type="password"
                  value={registerForm.password}
                  onChange={(event) =>
                    setRegisterForm((prevForm) => ({
                      ...prevForm,
                      password: event.target.value,
                    }))
                  }
                  id="password-input"
                  dir="ltr"
                  className="input-element"
                  placeholder="********"
                />
              </div>
            </div>
            <div className="grow" onClick={handleRegister}>
              <button tabIndex="1" id="submit-button">
                ثبت نام
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="background-overlay">
        <div id="overlay-orb-1"></div>
        <div id="overlay-orb-2"></div>
      </div>
    </>
  );
}

export default App;

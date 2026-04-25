import React, { useState } from "react";
import "./App.css";
import Background from "./components/Background";
import BANKS from "./data/banks.js";
const App = () => {
  const [cardNumberInput, setCardNumberInput] = useState("");
  const [cvv2Input, setCvv2Input] = useState("");
  const [expireYearInput, setExpireYearInput] = useState("");
  const [expireMonthInput, setExpireMonthInput] = useState("");
  
  const formattedCardNumber = cardNumberInput?.match(/.{1,4}/g)?.join("-");

  const findBankName = () => {
    const cardFirstDigits = cardNumberInput.slice(0, 6);
    return BANKS[cardFirstDigits] || "یافت نشد"
  };
  console.log(findBankName());

  return (
    <>
      <div id="form-root">
        <div id="credit-card">
          <div className="card-header">
            {cardNumberInput.length > 5 ? (
              <div className="card-price-field">
                <span> بانک شما: </span>
                <span className="payment-price"> {findBankName()} </span>
              </div>
            ) : null}
          </div>
          <div className="card-content">
            <div id="cardNumber-field" className="field!">
              <p className="field-label">شماره کارت:</p>
              <div className="card-number-field">
                <p
                  className={`${cardNumberInput.length ? "" : "cardNumber-is-empty"} card-text-area`}
                >
                  {cardNumberInput.length ? formattedCardNumber : null}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 w-full! mt-6">
              <div id="cvv2-field" className="field">
                <p className="field-label">Cvv2:</p>
                <div className="card-cvv2-field">
                  <p
                    className={`${cvv2Input.length ? "" : "cvv2-is-empty"} card-text-area`}
                  >
                    {cvv2Input.length ? cvv2Input : null}
                  </p>
                </div>
              </div>
              <div className="grid max-w-max grid-cols-2 justify-end ms-auto! gap-2">
                <div id="expire-month-field" className="field">
                  <p className="field-label">ماه انقضا:</p>
                  <div className="card-expireDate-field">
                    <p
                      className={`${expireMonthInput.length ? "" : "expireDate-is-empty"} card-text-area`}
                    >
                      {expireMonthInput.length ? expireMonthInput : null}
                    </p>
                  </div>
                </div>
                <div id="expire-date-field" className="field">
                  <p className="field-label">سال انقضا:</p>
                  <div className="card-expireDate-field">
                    <p
                      className={`${expireYearInput.length ? "" : "expireDate-is-empty"} card-text-area`}
                    >
                      {expireYearInput.length ? expireYearInput : null}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-body">
          <div>
            <label for="first-digits" className="form-label">
              {" "}
              شماره کارت:{" "}
            </label>
            <div className="w-full">
              <input
                placeholder="****"
                id="first-digits"
                type="number"
                value={cardNumberInput}
                onChange={(event) =>
                  setCardNumberInput(event.target.value.slice(0, 16))
                }
                className="form-input"
              />
            </div>
          </div>
          <div className="w-full!">
            <label for="cvv2-num" className="form-label">
              {" "}
              CVV2:{" "}
            </label>
            <div className="w-full">
              <input
                placeholder="***"
                id="cvv2-num"
                type="number"
                value={cvv2Input}
                onChange={(event) =>
                  setCvv2Input(event.target.value.slice(0, 3))
                }
                maxLength="4"
                className="form-input"
              />
            </div>
          </div>
          <div className="w-full! form-expiration" dir="ltr">
            <div>
              <label for="yearExpiration-num" className="form-label">
                سال انقضا:
              </label>
              <div className="w-full">
                <input
                  id="yearExpiration-num"
                  type="number"
                  placeholder="**"
                  value={expireYearInput}
                  onChange={(event) =>
                    setExpireYearInput(event.target.value.slice(0, 2))
                  }
                  maxLength="2"
                  className="form-input"
                />
              </div>
            </div>
            <div>
              <label for="monthExpiration-num" className="form-label">
                ماه انقضا:
              </label>
              <div className="w-full">
                <input
                  id="monthExpiration-num"
                  type="number"
                  placeholder="**"
                  value={expireMonthInput}
                  onChange={(event) =>
                    setExpireMonthInput(event.target.value?.slice(0, 2))
                  }
                  className="form-input"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="form-buttons">
          <button id="cancel-button">انصراف</button>
          <button id="submit-button">تائید و پرداخت</button>
        </div>
        <div className="text-yellow-600 rounded-lg border border-yellow-300 text-xs space-y-1.5 p-3 bg-yellow-500/10 w-full border-t">
          <p className="">* تمامی فیلد ها اجباری هستند</p>
          <p className="">
            * جهت جلوگیری از باطل شدن کارت, اطلاعات خود را با دقت وارد نمائید
          </p>
          <p className="">* تمامی اطلاعات برای سامانه سبز پی محفوظ می‌باشد</p>
        </div>
      </div>
      <Background />
    </>
  );
};

export default App;

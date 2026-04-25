import React, { useState } from "react";
import "./App.css";
import CITIES_WEATHER from "./cities.js";
import NoCity from "./components/NoCity/NoCity";
const App = () => {
  const [cityInformations, setCityInformations] = useState({
    id: "city001",
    city: "تهران",
    country: "ایران",
    temperature: {
      current: 22,
      history: [
        { hour: "10:00", temp: 20 },
        { hour: "11:00", temp: 21 },
        { hour: "12:00", temp: 23 },
        { hour: "13:00", temp: 24 },
      ],
      pastDays: [
        { date: "SATURDAY", temp: 25 },
        { date: "FRIDAY", temp: 23 },
        { date: "THURSDAY", temp: 21 },
      ],
    },
    status: "آفتابی", // وضعیت فعلی آب و هوا
  });
  const [searchCityInput, setSearchCityInput] = useState("");

  const findCityWeatherInformations = () => {
    const foundedCity = [...CITIES_WEATHER].find(
      (item) =>
        item.city.includes(searchCityInput) ||
        item.city_en.includes(searchCityInput),
    );
    if (foundedCity) {
      setCityInformations(foundedCity);
    } else {
      setCityInformations(null);
    }
    setSearchCityInput("")
  };

  return (
    <>
      {cityInformations !== null ? (
        <article id="weather-card">
          <header className="" id="weather-card.header">
            <div id="city-name">
              {cityInformations.country} , {cityInformations.city}
            </div>
            <div className="temp-parent">
              <span id="symbol"> C </span>
              <span id="temperature">
                {" "}
                {cityInformations.temperature.current}{" "}
              </span>
            </div>
            <div id="desc">{cityInformations.status}</div>
            <div id="search-field">
              <input
                value={searchCityInput}
                onChange={(event) => setSearchCityInput(event.target.value)}
                type="text"
                placeholder="نام شهر خود را جستجو کنید ..."
                id="search-input"
                className="w-full h-10 bg-black"
              />
              <button id="search-btn" onClick={findCityWeatherInformations}>
                جستجو
              </button>
            </div>
          </header>
          <main>
            <div id="in-hours">
              {cityInformations.temperature.history.map((todayHistory) => (
                <article className="hourly-card" key={`${todayHistory.hour}${todayHistory.temp}`}>
                  <p className="hour">{todayHistory.hour}</p>
                  <img
                    src={
                      todayHistory.temp > 22
                        ? "images/sunny.png"
                        : "images/rainy.png"
                    }
                  />
                  <p className="hour-temp">{todayHistory.temp}C</p>
                </article>
              ))}
            </div>
          </main>
          <footer id="daily-section">
            {cityInformations.temperature.pastDays.map((pastDay) => (
              <article className="daily-card" key={pastDay.date}>
                <p className="daily-date">07/12</p>
                <p className="dayly-day">{pastDay.date.slice(0, 3)}</p>
                <img
                  src={
                    pastDay.temp > 22
                      ? "images/sunny.png"
                      : "images/rainy.png"
                  }
                  alt="Weather"
                />
                <p className="daily-temp">{pastDay.temp}C</p>
              </article>
            ))}
          </footer>
        </article>
      ) : (
        <NoCity onSelect={() => setCityInformations(CITIES_WEATHER[0])} />
      )}
    </>
  );
};

export default App;

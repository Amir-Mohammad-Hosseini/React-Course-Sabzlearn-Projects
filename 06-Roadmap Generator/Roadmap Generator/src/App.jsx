import React, { useState } from "react";
import "./App.css";
import CATEGORIES from "./data/data.js";
const App = () => {
  const [roadmaps] = useState(CATEGORIES);
  const [categoryInput, setCategoryInput] = useState("-1");

  const selectedRoadmap = roadmaps.find(
    (roadmap) => roadmap.id === categoryInput,
  );
  return (
    <>
      <div id="card">
        <div id="header">
          <h1 className="title">مسیر سبز - راهنمای مسیر شما</h1>
        </div>
        <div id="content">
          <div>
            <select
              id="select-category"
              value={categoryInput}
              onChange={(event) => setCategoryInput(event.target.value)}
            >
              <option value="-1">لطفا فیلد موردنظر را انتخاب فرمایید</option>
              {roadmaps.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>
          {selectedRoadmap ? (
            <div>
              <div className="selected-category-show">
                <span> نقشه اختصاصی شما برای </span>
                <span id="selected-roadmap-title">
                  {" "}
                  {selectedRoadmap.title}{" "}
                </span>
                :
              </div>
            </div>
          ) : null}

          <div id="roadmap" className={selectedRoadmap ? "" : "is-empty"}>
            {!selectedRoadmap ? (
              <div className="empty-list">
                <p>در ابتدا لطفا حوزه مورد نظر خود را انتخاب فرمایید</p>
              </div>
            ) : (
              selectedRoadmap.technologies.map((technology) => (
                <article key={technology.id} className="roadmap-item">
                  <span className="roadmap-step">{technology.step}</span>
                  <img
                    src={technology.image}
                    className="technology-img"
                    alt={technology.name}
                  />
                  <div className="roadmap-content">
                    <h1 className="technology-name">{technology.name}</h1>
                  </div>
                  <div className="img-overlay"></div>
                </article>
              ))
            )}
          </div>
        </div>
      </div>

      <div id="background"></div>
    </>
  );
};

export default App;

import React, { useState } from "react";
import "./styles.css";

const time = [
  {
    name: "The philosophy of time management",
    rating: "⭐⭐⭐",
    url: "https://www.youtube.com/embed/WXBA4eWskrc"
  },
  {
    name: "How to multiply your time",
    rating: "⭐⭐⭐⭐",
    url: "https://www.youtube.com/embed/y2X7c9TUQJ8"
  },
  {
    name: "Don't manage time, manage focus",
    rating: "⭐⭐⭐⭐⭐",
    url: "https://www.youtube.com/embed/R7cUvp3XnYs"
  }
];

const leadership = [
  {
    name: "Great Leadership starts with self-leadership",
    rating: "⭐⭐⭐⭐",
    url: "https://www.youtube.com/embed/vlpKyLklDDY"
  },
  {
    name: "5 pillars of effective leadership",
    rating: "⭐⭐⭐",
    url: "https://www.youtube.com/embed/p-JG2WSfIQI"
  },
  {
    name: "Why good leaders make you feel safe",
    rating: "⭐⭐⭐⭐⭐",
    url: "https://www.youtube.com/embed/lmyZMtPVodo"
  }
];

const learning = [
  {
    name: "The first 20 hours",
    rating: "⭐⭐⭐⭐⭐",
    url: "https://www.youtube.com/embed/5MgBikgcWnY"
  },
  {
    name: "Learning how to learn",
    rating: "⭐⭐⭐⭐",
    url: "https://www.youtube.com/embed/O96fE1E-rf8"
  },
  {
    name: "How to get your brain to focus",
    rating: "⭐⭐⭐⭐",
    url: "https://www.youtube.com/embed/Hu4Yvq-g7_Y"
  }
];

const tedXLibrary = { time, leadership, learning };
const tedXnames = Object.keys(tedXLibrary);

export default function App() {
  const [title, setTitle] = useState("time");
  const [active, setActive] = useState("time");

  function clickHandler(title) {
    setTitle(title);
    setActive(title);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Tedx Recommendations</h1>
        <ul>
          {tedXnames.map((title) => (
            <li
              key={title}
              onClick={() => clickHandler(title)}
              className={active === title ? "active" : ""}
            >
              {title}
            </li>
          ))}
        </ul>
        {title && (
          <div>
            <ul>
              {tedXLibrary[title].map((title) => {
                return (
                  <li
                    style={{
                      listStyle: "none",
                      padding: "1rem",
                      border: "1px solid #D1D5DB",
                      margin: "1rem",
                      borderRadius: "0.5rem"
                    }}
                    key={title.name}
                  >
                    <iframe
                      style={{
                        minWidth: "50vw",
                        minHeight: "25vw",
                        margin: "1rem"
                      }}
                      src={title.url}
                      title={title.name}
                      allowtransparency="true"
                      allow="encrypted-media"
                    >
                      {" "}
                    </iframe>
                    <div style={{ fontSize: "larger" }}> {title.name} </div>
                    <div style={{ fontSize: "large" }}> {title.rating} </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

import React from "react";
import "./Card.css";

function Card({ front, back, isRevealed }) {
  return (
    <div className="card">
      <div className={`card-content ${isRevealed ? "hidden" : ""}`}>
        <h2>{front}</h2>
        <p id="back">{back}</p>
      </div>
    </div>
  );
}

export default Card;

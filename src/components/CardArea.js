import "./CardArea.css";
import React from "react";
import Card from "./Card";
import { cards } from "./FlashCards";
import Quiz from "./Quiz";

function CardArea({ showCards }) {
  const numberOfCards = cards.length;

  return (
    <div className="card-holder">
      {showCards ? (
        <div>
          <div className="card-count">Showing {numberOfCards} cards</div>
          {cards.map((card, index) => (
            <Card key={index} front={card.front} back={card.back} isRevealed={true}/>
          ))}
        </div>
      ) : (
        <div>
          <Quiz cards={cards} />
        </div>
      )}
    </div>
  );
}

export default CardArea;

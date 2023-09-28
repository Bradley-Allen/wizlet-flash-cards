import React, { useState, useEffect } from "react";
import Card from "./Card";

function Quiz({ cards }) {
  const [availableCards, setAvailableCards] = useState([...cards]); // Create a copy of the cards array
  const [rememberedCards, setRememberedCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(availableCards[0]);
  const [isRevealed, setIsRevealed] = useState(false); // Track if the back should be revealed
  const [isCongratulations, setIsCongratulations] = useState(false); // Track if all cards are remembered

  useEffect(() => {
    // Update currentCard when availableCards changes
    setCurrentCard(availableCards[0]);

    // Reset isRevealed to hide the back of the current card
    setIsRevealed(false);
  }, [availableCards]);

  const handleRemembered = () => {
    // Move the current card to the remembered cards
    setRememberedCards((prevRememberedCards) => [
      ...prevRememberedCards,
      currentCard,
    ]);

    // Remove the current card from the available cards
    setAvailableCards((prevAvailableCards) =>
      prevAvailableCards.filter((card) => card !== currentCard)
    );

    // Reset isRevealed to hide the back of the next card
    setIsRevealed(false);
  };

  const handleNotRemembered = () => {
    // Move the current card to the end of the available cards
    const cardToMove = availableCards.shift();
    setAvailableCards([...availableCards, cardToMove]);

    // Reset isRevealed to hide the back of the next card
    setIsRevealed(false);
  };

  const handleRestartQuiz = () => {
    // Reset the states to restart the quiz
    setAvailableCards([...cards]);
    setRememberedCards([]);
    setCurrentCard(cards[0]);
    setIsRevealed(false);
    setIsCongratulations(false);
  };

  useEffect(() => {
    // Check if all cards are remembered to show the "Congratulations" message
    if (rememberedCards.length === cards.length) {
      setIsCongratulations(true);
    }
  }, [rememberedCards, cards]);

  return (
    <div>
      {isCongratulations ? (
        <>
          <div>
            <h2>Congratulations!</h2>
            <p>You remembered all the cards!</p>
          </div>
          <br />
          <button onClick={handleRestartQuiz}>Restart Quiz</button>
        </>
      ) : currentCard ? (
        <>
          <Card
            front={currentCard.front}
            back={currentCard.back}
            isRevealed={isRevealed}
          />
          <div className="quiz-buttons">
            {!isRevealed ? (
              <button onClick={() => setIsRevealed(true)}>Reveal Back</button>
            ) : (
              <>
                <button onClick={handleRemembered}>Remembered</button>
                <button onClick={handleNotRemembered}>Didn't Remember</button>
              </>
            )}
            <p>
              Remembered {cards.length - availableCards.length} out of {cards.length} cards
            </p>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Quiz;

import ModeSelect from "./components/ModeSelect";
import CardArea from "./components/CardArea";
import React, { useState } from "react";

function App() {
  const [showCards, setShowCards] = useState(true);

  const handleShowCards = () => {
    setShowCards(true);
  };

  const handleShowQuiz = () => {
    setShowCards(false);
  };

  return (
    <div className="page-container">
      <div className="content-container">
        <ModeSelect
          onSelectCard={handleShowCards}
          onSelectQuiz={handleShowQuiz}
        />
        <h2>Wizlet</h2>
        <CardArea showCards={showCards} />
      </div>
    </div>
  );
}

export default App;

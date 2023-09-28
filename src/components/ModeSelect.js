import "./ModeSelect.css";

function ModeSelect({ onSelectCard, onSelectQuiz }) {
  return (
    <div className="buttons-container">
      <button onClick={onSelectCard}>Card List</button>
      <button onClick={onSelectQuiz}>Quiz</button>
    </div>
  );
}

export default ModeSelect;

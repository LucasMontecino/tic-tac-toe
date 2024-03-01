import { useState } from "react";
import "./styles.css";

function Button({ value, onClick }) {
  return (
    <button onClick={onClick} className="cell">
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [values, setValues] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  function handleClick(getCurrentCell) {
    const cpyCells = [...values];

    if (cpyCells[getCurrentCell]) return null;

    cpyCells[getCurrentCell] = isXTurn ? "X" : "O";

    setIsXTurn(!isXTurn);
    setValues(cpyCells);
  }

  console.log(values);

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Button value={values[0]} onClick={() => handleClick(0)} />
        <Button value={values[1]} onClick={() => handleClick(1)} />
        <Button value={values[2]} onClick={() => handleClick(2)} />
      </div>

      <div className="row">
        <Button value={values[3]} onClick={() => handleClick(3)} />
        <Button value={values[4]} onClick={() => handleClick(4)} />
        <Button value={values[5]} onClick={() => handleClick(5)} />
      </div>

      <div className="row">
        <Button value={values[6]} onClick={() => handleClick(6)} />
        <Button value={values[7]} onClick={() => handleClick(7)} />
        <Button value={values[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

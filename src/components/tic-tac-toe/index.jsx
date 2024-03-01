import { useEffect, useState } from "react";
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

  // 0 1 2
  // 3 4 5
  // 6 7 8

  function getWinerValues(squares) {
    const winnerInputs = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];

    for (let i = 0; i < winnerInputs.length; i++) {
      let [x, y, z] = winnerInputs[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }

    return null;
  }

  function handleClick(getCurrentCell) {
    const cpyCells = [...values];

    if (getWinerValues(cpyCells) && cpyCells[getCurrentCell]) return null;

    cpyCells[getCurrentCell] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setValues(cpyCells);
  }

  function handleRestart() {
    setValues(Array(9).fill(""));
  }

  useEffect(() => {
    if (!getWinerValues(values) && values.every((item) => item !== "")) {
      setStatus(`This is a draw! Please restart the game`);
    } else if (getWinerValues(values)) {
      setStatus(`Winner is ${getWinerValues(values)}`);
    } else {
      setStatus(`Next player turn is ${isXTurn ? "X" : "O"}`);
    }
  }, [values, isXTurn]);

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

      {<p className="status">{status}</p>}
      <button onClick={handleRestart}>Restart the game</button>
    </div>
  );
}

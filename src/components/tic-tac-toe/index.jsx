import { useEffect, useState } from "react";
import Squares from "./squares";
import "./styles.css";

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  function handleClick(getCurrentSquare) {
    let cpySquares = [...squares];

    if (cpySquares[getCurrentSquare]) return null;

    cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";

    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  }

  function handleReset() {
    setIsXTurn(true);
    setSquares(Array(9).fill(""));
  }

  function getWinnerGame(squares) {
    const winnerRules = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winnerRules.length; i++) {
      const [x, y, z] = winnerRules[i];

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

  useEffect(() => {
    if (getWinnerGame(squares)) {
      setStatus(
        `The Winner is the player ${getWinnerGame(
          squares
        )}. Please reset the game!`
      );
    } else if (
      !getWinnerGame(squares) &&
      squares.every((item) => item !== "")
    ) {
      setStatus("It's a draw! No winner. Please reset the game.");
    } else {
      setStatus(`Next player turn is ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);

  console.log(squares);

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Squares value={squares[0]} onClick={() => handleClick(0)} />
        <Squares value={squares[1]} onClick={() => handleClick(1)} />
        <Squares value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Squares value={squares[3]} onClick={() => handleClick(3)} />
        <Squares value={squares[4]} onClick={() => handleClick(4)} />
        <Squares value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Squares value={squares[6]} onClick={() => handleClick(6)} />
        <Squares value={squares[7]} onClick={() => handleClick(7)} />
        <Squares value={squares[8]} onClick={() => handleClick(8)} />
      </div>

      <div className="options-container">
        <p className="status">{status}</p>
        <button className="reset" onClick={handleReset}>
          Reset The Game
        </button>
      </div>
    </div>
  );
}

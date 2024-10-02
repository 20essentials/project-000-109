import { useState } from "react";
import ALL_COMBOS from "./Helpers/WinnerCombos.js";
import "./global.css";

const TURNS = {
  red: "🔴",
  yellow: "🟡",
};

const schemeArray = [
  [0, 1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12, 13],
  [14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27],
  [28, 29, 30, 31, 32, 33, 34],
  [35, 36, 37, 38, 39, 40, 41],
];

const App = () => {
  const [indexRowActive, setIndexRoactActive] = useState(1);
  const [rowActive, setRowActive] = useState(schemeArray.at(-indexRowActive));
  const [drawer, setDrawers] = useState(() => {
    return Array(42).fill(" ", 0, 35).fill(null, 35, 42);
  });
  const [turn, setTurn] = useState(TURNS.red);
  const [winner, setWinner] = useState(null);

  const checkWinner = (drawerToCheck) => {
    for (let combo of ALL_COMBOS) {
      const [a, b, c, d] = combo;
      if (
        drawerToCheck[a] &&
        drawerToCheck[a] === TURNS.red &&
        drawerToCheck[b] === TURNS.red &&
        drawerToCheck[c] === TURNS.red &&
        drawerToCheck[d] === TURNS.red
      ) {
        return drawerToCheck[a];
      } else if (
        drawerToCheck[a] &&
        drawerToCheck[a] === TURNS.yellow &&
        drawerToCheck[b] === TURNS.yellow &&
        drawerToCheck[c] === TURNS.yellow &&
        drawerToCheck[d] === TURNS.yellow
      ) {
        return drawerToCheck[a];
      }
    }

    return null;
  };

  const checkEndGame = (drawerToCheck) => {
    return drawerToCheck.every((el) => el !== null && el !== " ");
  };

  const comprobeRowEnd = (newDrawer, rowActive) => {
    const begin = rowActive.at(0);
    const end = rowActive.at(-1);
    const miniArray = newDrawer.slice(begin, end + 1);
    return miniArray.every((el) => el === TURNS.yellow || el === TURNS.red);
  };

  const updateDrawer = (index) => {
    if (drawer[index] || winner) return;
    const newDrawer = [...drawer];
    newDrawer[index] = turn;
    setDrawers(newDrawer);
    const newTurn = TURNS.red === turn ? TURNS.yellow : TURNS.red;
    setTurn(newTurn);
    const rowEnd = comprobeRowEnd(newDrawer, rowActive);
    if (rowEnd) {
      setIndexRoactActive((prevIndex) => {
        if (prevIndex < 6) {
          const newIndex = prevIndex + 1;

          setRowActive(() => {
            const newRow = schemeArray.at(-newIndex);

            setDrawers((prevDrawer) => {
              let begin = newRow.at(0);
              let end = newRow.at(-1);
              return newDrawer.fill(" ", 0, begin).fill(null, begin, end + 1);
            });

            return newRow;
          });

          return newIndex;
        }

        return 6;
      });
    }

    const newWinner = checkWinner(newDrawer);
    if (newWinner) {
      console.log("Ganador", newWinner);
      setWinner(newWinner);
    } else if (checkEndGame(newDrawer)) {
      console.log("Empate");
      setWinner(false);
    }
  };

  const Draw = ({ children, isSelected, index, updateDrawer }) => {
    const className = `ball ${isSelected ? "select" : ""}`;

    return (
      <button onClick={() => updateDrawer(index)} className={className}>
        {children}
      </button>
    );
  };

  const Modal = ({ winner }) => {
    if (winner === null) return;
    let message = winner === false ? "Tie" : "Won";
    return (
      <article className="modal">
        <h3>{message}</h3>
        {winner && <Draw>{winner}</Draw>}
      </article>
    );
  };

  const resetGame = () => {
    setIndexRoactActive(1);
    setRowActive(schemeArray.at(-1));
    setDrawers(Array(42).fill(" ", 0, 35).fill(null, 35, 42));
    setTurn(TURNS.red);
    setWinner(null);
  };

  return (
    <main className="am-container">
      <h2>
        Conecta <span>4</span>
      </h2>
      <section className="container-drawers">
        {drawer.map((el, index) => {
          return (
            <Draw key={index} index={index} updateDrawer={updateDrawer}>
              {el}
            </Draw>
          );
        })}
      </section>
      <article className="turns">
        <Draw isSelected={turn === TURNS.red}>{TURNS.red}</Draw>
        <Draw isSelected={turn === TURNS.yellow}>{TURNS.yellow}</Draw>
      </article>
      <Modal winner={winner}></Modal>
      <button onClick={() => resetGame()} className="reset">
        Reset Game
      </button>
    </main>
  );
};

export default App;

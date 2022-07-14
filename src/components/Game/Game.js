import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Rock from "../../assets/images/Rock.jpg";
import Scissors from "../../assets/images/Scissors.jpg";
import Paper from "../../assets/images/Paper.jpg";

import "./game.scss";

const Game = ({ score, myChoice, setScore }) => {
  const [house, setHouse] = useState("");
  const [playerWin, setPlayerWin] = useState("");
  const [myChoicePic, setMyChoicePic] = useState([Rock, Scissors, Paper]);

  const newHousePick = () => {
    const choices = ["Rock", "Scissors", "Paper"];
    setHouse(choices[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    newHousePick();
  }, []);

  const myChoiceImg = () => {
    if (myChoice === "Rock") {
      setMyChoicePic("Rock");
    } else if (myChoice === "Scissors") {
      setMyChoicePic("Scissors");
    } else if (myChoice === "Paper") {
      setMyChoicePic("Paper");
    } else {
      setMyChoicePic("");
    }
  };

  useEffect(() => {
    myChoiceImg();
  }, [myChoice]);

  const Result = () => {
    if (myChoice === "Rock" && house === "Scissors") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "Rock" && house === "Paper") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (myChoice === "Paper" && house === "Rock") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "Paper" && house === "Scissors") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (myChoice === "Scissors" && house === "Paper") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "Scissors" && house === "Rock") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else {
      setPlayerWin("DRAW");
    }
  };

  useEffect(() => {
    Result();
  }, [house]);

  return (
    <div className="game">
      <div className="players">
        <div className="me">
          <span>My Choice</span>
          {myChoicePic == "Rock" && <img src={Rock} />}
          {myChoicePic == "Scissors" && <img src={Scissors} />}
          {myChoicePic == "Paper" && <img src={Paper} />}
        </div>
        <div className="house">
          <span>House Choice</span>
          {house == "Rock" && <img src={Rock} />}
          {house == "Scissors" && <img src={Scissors} />}
          {house == "Paper" && <img src={Paper} />}
        </div>
      </div>
      <div className="results">
        Result: {playerWin == "win" && <h1 className="win">You Win</h1>}
        {playerWin == "lose" && <h1 className="lose">You lost</h1>}
        {playerWin == "DRAW" && <h1>draw</h1>}
        <div className="playAgain">
          <Link
            style={{ textDecoration: "none" }}
            to="/"
            onClick={() => setHouse()}
          >
            <span>Play Again</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Game;

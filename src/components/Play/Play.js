import "./play.scss";
import Rock from "../../assets/images/Rock.jpg";
import Scissors from "../../assets/images/Scissors.jpg";
import Paper from "../../assets/images/Paper.jpg";
import Triangel from "../../assets/images/Untitled-1.png";
import { Link } from "react-router-dom";

const Play = ({ setMyChoice }) => {
  const setChoice = (e) => {
    setMyChoice(e.target.dataset.id);
  };

  return (
    <div className="play">
      <Link to="/Game">
        <div className="icon">
          <img
            className="paper"
            src={Paper}
            data-id="Paper"
            onClick={setChoice}
          />
        </div>
      </Link>
      <Link to="/Game">
        <div className="icon">
          <img
            className="scissors"
            src={Scissors}
            data-id="Scissors"
            onClick={setChoice}
          />
        </div>
      </Link>
      <Link to="/Game">
        <div className="icon">
          <img className="rock" src={Rock} data-id="Rock" onClick={setChoice} />
        </div>
      </Link>
    </div>
  );
};

export default Play;

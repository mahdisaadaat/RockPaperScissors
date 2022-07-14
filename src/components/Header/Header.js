import "./header.scss";

const Header = ({ score }) => {
  return (
    <div className="Header">
      <div className="container">
        <div className="text">
          <span>Rock</span>
          <span>Paper</span>
          <span>Scissors</span>
        </div>
        <div className="score-box">
          <span>Score</span>
          <div className="score-box-score">{score}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;

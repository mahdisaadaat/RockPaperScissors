import Header from "./components/Header/Header";
import Play from "./components/Play/Play";
import Game from "./components/Game/Game";
import Footer from "./components/Footer/Footer";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <Header score={score} />
      <Routes>
        <Route exact path="/" element={<Play setMyChoice={setMyChoice} />} />
        <Route
          exact
          path="/Game"
          element={
            <Game myChoice={myChoice} score={score} setScore={setScore} />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

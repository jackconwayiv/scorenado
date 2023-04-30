import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import NewGame from "./components/NewGame";
import Scoreboard from "./components/Scoreboard";

function App() {
  // className="App-header"

  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<NewGame />} />
          <Route path="/game/:gameIdToLoad" element={<Scoreboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

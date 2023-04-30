import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LoadGame from "./components/LoadGame";
import Navigation from "./components/Navigation";
import NewGame from "./components/NewGame";
import NewTemplate from "./components/NewTemplate";
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
          <Route path="/games" element={<LoadGame />} />
          <Route path="/template" element={<NewTemplate />} />
          <Route path="/*" element={<NewGame />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PlayersList from "./components/PlayersList";
import { useState, useEffect } from "react";
import HttpRequests from "./httpRequests/HttpRequests";

export default function App() {
  const [playersList, setPlayersList] = useState([]);
  const [teamsList, setTeamsList] = useState([]);

  const fetchAllPlayers = () => {
    HttpRequests.fetchAllPlayers()
      .then((response) => {
        setPlayersList(response.players);
      })
      .catch((error) => alert(error));
  };

  const fetchAllTeams = () => {
    HttpRequests.fetchAllTeams()
      .then((response) => {
        setTeamsList(response);
      })
      .catch((error) => alert(error));
  };

  useEffect(() => {
    fetchAllPlayers();
    fetchAllTeams();
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home teamsList={teamsList} />}></Route>
          <Route
            path="/players"
            element={<PlayersList playersList={playersList} />}
          ></Route>
          {/* <Route path="/players/:id" component={PlayerDetails}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

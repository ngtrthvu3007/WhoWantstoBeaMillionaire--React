import React from "react";
import HomePage from "./components/home/homepage.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GamePage from "./components/game/game.js";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/game" element={<GamePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

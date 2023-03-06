import { Route } from "react-router-dom";
import GamePage from "../components/game/game.js";
import { Fragment } from "react";

function Routers() {
  return (
    <Fragment>
      <Route path="/game">
        <GamePage />
      </Route>
    </Fragment>
  );
}
export default Routers;

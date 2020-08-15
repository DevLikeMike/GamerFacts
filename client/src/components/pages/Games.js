import React, { Fragment, useContext } from "react";
import GameJumbo from "../games/GameJumbo";
import GamesContext from "../../context/games/gamesContext";
import GameItem from "../games/GameItem";

const Games = () => {
  const gamesContext = useContext(GamesContext);
  const { games } = gamesContext;

  return (
    <Fragment>
      <GameJumbo />
      <div className="card-cont">
        {games.map((game) => (
          <GameItem key={game.id} game={game} />
        ))}
      </div>
    </Fragment>
  );
};

export default Games;

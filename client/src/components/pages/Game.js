import React, { useContext } from "react";
import { useParams } from "react-router";
import GamesContext from "../../context/games/gamesContext";

const Game = () => {
  const gamesContext = useContext(GamesContext);
  const { games } = gamesContext;
  const { id } = useParams();
  const game = games.filter((game) => id == game.id);
  const { name, description, img } = game[0];

  return (
    <div className="game-cont">
      <h1 className="text-center">{name}</h1>
      <img src={img} alt="Game" />
      <p>{description}</p>
    </div>
  );
};

export default Game;

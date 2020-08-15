import React, { useContext } from "react";
import GameContext from "../../context/games/gamesContext";

const GameItem = ({ game }) => {
  const gameContext = useContext(GameContext);
  const { name, description, img, id } = game;

  return (
    <div className="card">
      <img src={img} alt="nothing" />
      <h3>{name}</h3>
      <p>{description.substr(0, 70)}</p>
      <a href={`/games/${id}`} className="btn btn-small">
        See Game
      </a>
    </div>
  );
};

export default GameItem;

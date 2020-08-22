import React, { useContext } from "react";
import GameContext from "../../context/games/gamesContext";

const GameItem = ({ game }) => {
  const gameContext = useContext(GameContext);
  const { name, description, image, _id } = game;

  return (
    <div className="card">
      <img src={image} alt="nothing" />
      <h3>{name}</h3>
      <p>{description.substr(0, 70)}</p>
      <a href={`/games/${_id}`} className="btn btn-small">
        See Game
      </a>
    </div>
  );
};

export default GameItem;

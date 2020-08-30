import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Games = () => {
  return (
    <Fragment>
      <div className="showcase">
        <h1>GamerFacts</h1>
        <Link to="/newgame" className="btn">
          Review A Game Now!
        </Link>
        <p>Welcome to GamerFacts, the ground breaking videogame review site!</p>
        <hr />
        <p>
          Please read the articles created for gamers by gamers. These reviews
          will steer you into the direction on what game to choose for you. New
          games, old games, retro, block-busters, timeless classics, and more!
        </p>
      </div>
    </Fragment>
  );
};

export default Games;

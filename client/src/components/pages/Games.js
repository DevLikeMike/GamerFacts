import React, { Fragment, useContext, useEffect } from "react";
import GameJumbo from "../games/GameJumbo";
import GamesContext from "../../context/games/gamesContext";
import AuthContext from "../../context/auth/authContext";
import GameItem from "../games/GameItem";

const Games = () => {
  const authContext = useContext(AuthContext);
  const gamesContext = useContext(GamesContext);
  const { getGames, games } = gamesContext;
  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
    getGames();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {games !== null ? (
        <div className="parent">
          <GameJumbo />
          <div className="card-cont">
            {games.map((game) => (
              <GameItem key={game._id} game={game} />
            ))}
          </div>
        </div>
      ) : (
        <GameJumbo />
      )}
    </Fragment>
  );
};

export default Games;

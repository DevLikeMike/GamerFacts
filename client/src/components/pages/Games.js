import React, { Fragment, useContext, useEffect } from "react";

//Import components
import GameJumbo from "../games/GameJumbo";
import SearchBar from "../layout/Search";
import GameItem from "../games/GameItem";

//Import contexts
import GamesContext from "../../context/games/gamesContext";
import AuthContext from "../../context/auth/authContext";

const Games = () => {
  // Intialize Conexts and destruct
  const authContext = useContext(AuthContext);
  const gamesContext = useContext(GamesContext);
  const { getGames, games, filtered } = gamesContext;
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
          <SearchBar />
          <div className="card-cont">
            {filtered !== null
              ? filtered.map((game) => <GameItem key={game._id} game={game} />)
              : games.map((game) => <GameItem key={game._id} game={game} />)}
          </div>
        </div>
      ) : (
        <GameJumbo />
      )}
    </Fragment>
  );
};

export default Games;

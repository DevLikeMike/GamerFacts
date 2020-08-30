import React, { useContext, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Spinner from "../layout/Spinner";

import GamesContext from "../../context/games/gamesContext";
import AuthContext from "../../context/auth/authContext";

const Game = (props) => {
  const authContext = useContext(AuthContext);
  const gamesContext = useContext(GamesContext);
  const { games, getGames, deleteGame } = gamesContext;
  const { loadUser, user } = authContext;

  useEffect(() => {
    loadUser();
    getGames();
    //eslint-disable-next-line
  }, []);

  // Get id from query, set ready for mongo comparisons
  const { _id } = useParams();

  const onDelete = (id, e) => {
    e.preventDefault();
    deleteGame(id);
    props.history.push("/games");
  };

  if (games !== null) {
    const game = games.filter((game) => _id == game._id);
    const { name, image, description, user: gameUser } = game[0];

    return (
      <Fragment>
        <div className="game-cont">
          <h1 className="text-center">{name}</h1>
          <img src={image} alt="Game picture" />
          <p>{description}</p>
          {gameUser == user._id ? (
            <div className="buttonWrapper">
              <Link href="#!" className="btn btn-small warning">
                Edit Review
              </Link>
              <a
                href="/games"
                className="btn btn-small danger"
                onClick={() => {
                  onDelete(_id);
                }}
              >
                Delete Review
              </a>
            </div>
          ) : (
            <Fragment></Fragment>
          )}
        </div>
      </Fragment>
    );
  } else {
    return <Spinner />;
  }
};

export default Game;

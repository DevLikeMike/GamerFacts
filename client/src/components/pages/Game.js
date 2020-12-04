import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

//Bring in components
import Stars from "react-rating-stars-component";
import Spinner from "../layout/Spinner";
//Bring in contexts
import GamesContext from "../../context/games/gamesContext";
import AuthContext from "../../context/auth/authContext";

const Game = (props) => {
  //Declare and destructe contexts/states
  const authContext = useContext(AuthContext);
  const gamesContext = useContext(GamesContext);
  const { games, deleteGame } = gamesContext;
  const { user } = authContext;
  // Get id from query, set ready for mongo comparisons
  const { _id } = useParams();
  //Delete Handler
  const onDelete = (_id) => {
    deleteGame(_id);
    props.history.push("/games");
  };
  //Checking to make sure games has loaded into state
  if (games !== null) {
    //Capture game from DB that matches requested game
    const game = games.filter((game) => _id === game._id);
    //Deconstruct infomation from selected game review
    const {
      name,
      image,
      description,
      user: gameUser,
      rating,
      platform,
      author,
    } = game[0];

    //Stars component info
    const starConfig = {
      size: 30,
      count: 5,
      edit: false,
      isHalf: true,
      value: Number(rating),
      color: "#777",
      activeColor: "#dea602",
    };

    return (
      <Fragment>
        <Link to="/games" className="backBtn">
          <i class="fas fa-chevron-left"></i> Back
        </Link>
        <h1 className="gameTitle text-center">
          {name}-{platform}
        </h1>
        <div className="game-cont">
          <div className="left-side">
            <img src={image} alt="Game picture" />
          </div>
          <div className="right-side">
            <p>{description}</p>
            <p className="authGP">
              <em>-Review submitted by {author}</em>
            </p>
            <Stars {...starConfig} classNames="stars" />

            {/* Check user authorization for delete/edit buttons */}
            {gameUser === user._id ? (
              <div className="buttonWrapper">
                <Link
                  to={`/games/${_id}/edit`}
                  className="btn btn-small warning"
                >
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
        </div>
      </Fragment>
    );
  } else {
    return <Spinner />;
  }
};

export default Game;

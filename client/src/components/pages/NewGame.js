import React, { Fragment, useState, useContext } from "react";
import GamesContext from "../../context/games/gamesContext";
import AuthContext from "../../context/auth/authContext";
import Stars from "react-rating-stars-component";

const NewGame = (props) => {
  const gamesContext = useContext(GamesContext);
  const authContext = useContext(AuthContext);
  const { addGame } = gamesContext;
  const { user } = authContext;

  const [newGame, setNewGame] = useState({
    ngUser: "",
    name: "",
    image: "",
    rating: "",
    description: "",
    platform: "",
    date: "",
    author: "",
  });

  let {
    ngUser,
    name,
    image,
    rating,
    author,
    description,
    platform,
    date,
  } = newGame;

  //Stars component info
  const starConfig = {
    size: 30,
    count: 5,
    isHalf: true,
    value: 3,
    color: "#777",
    activeColor: "#dea602",
    onChange: (newValue) => {
      console.log(`new value is ${newValue}`);
      setNewGame({ ...newGame, rating: newValue });
      console.log(rating);
    },
  };

  const onChange = (e) => {
    //Update values as they change
    setNewGame({ ...newGame, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //Set final values to the game before submitting to DB
    ngUser = user.id;
    author = user.name;
    date = Date.now();
    //Submit post request with newGame to game api
    addGame(newGame);
    //Redirect back to games page, showing new game
    props.history.push("/games");
  };

  return (
    <Fragment>
      <div className="form-wrapper flex flex-center col">
        <h1 id="newGameHeader">New Game Review</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Please enter the name of the game"
              value={name}
              onChange={onChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="image"
              placeholder="Please paste a url to the cover art..."
              value={image}
              onChange={onChange}
              required
            />
          </div>
          <select name="platform" onChange={onChange}>
            <option value="" defaultValue>
              Platform?
            </option>
            <option value="PC">PC</option>
            <option value="XBOX">Xbox</option>
            <option value="Playstation">Playstation</option>
            <option value="Nintendo">Nintendo</option>
          </select>
          <h3>Please enter your review here...</h3>

          <div className="form-group" id="description">
            <textarea
              type="textArea"
              name="description"
              placeholder=""
              value={description}
              onChange={onChange}
              required
            />
          </div>
          <h3 className="text-center">Please Rate Your Game</h3>
          <Stars {...starConfig} classNames="stars" />
          <input type="submit" value="Submit New Game" />
        </form>
      </div>
    </Fragment>
  );
};

export default NewGame;

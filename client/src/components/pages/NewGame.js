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
  });

  let { ngUser, name, image, rating, description, platform, date } = newGame;

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
    setNewGame({ ...newGame, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    ngUser = user.id;
    date = Date.now();
    addGame(newGame);
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
              placeholder="Cover art url"
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
            <option value="XBOX">xbox</option>
            <option value="Playstation">Playstation</option>
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

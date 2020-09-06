import React, { Fragment, useState, useContext } from "react";
import { useParams } from "react-router";
import GamesContext from "../../context/games/gamesContext";
import Stars from "react-rating-stars-component";

const EditGame = (props) => {
  const gamesContext = useContext(GamesContext);
  const { updateGame, games } = gamesContext;

  const { _id } = useParams();

  let gameToEdit = games.filter((game) => game._id === _id)[0];

  const [editedGame, setEditedGame] = useState({
    name: `${gameToEdit.name}`,
    image: `${gameToEdit.image}`,
    rating: `${gameToEdit.rating}`,
    description: `${gameToEdit.description}`,
    platform: `${gameToEdit.platform}`,
  });

  let { name, image, rating, description, platform } = editedGame;

  //Stars component info
  const starConfig = {
    size: 30,
    count: 5,
    isHalf: true,
    value: Number(rating),
    color: "#777",
    activeColor: "#dea602",
    onChange: (newValue) => {
      console.log(`new value is ${newValue}`);
      setEditedGame({ ...editedGame, rating: newValue });
    },
  };

  const onChange = (e) => {
    setEditedGame({ ...editedGame, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateGame(editedGame, _id);
    // setTimeout(() => {
    //   props.history.push(`/games/${_id}`);
    // }, 1000);
    props.history.push(`/games/${_id}`);
  };

  return (
    <Fragment>
      <div className="form-wrapper flex flex-center col">
        <h1 id="newGameHeader">{name}</h1>
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
            <option value={platform} defaultValue>
              {platform}
            </option>
            <option value="PC">PC</option>
            <option value="XBOX">xbox</option>
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
          <input type="submit" value="Update Your Game" />
        </form>
      </div>
    </Fragment>
  );
};

export default EditGame;

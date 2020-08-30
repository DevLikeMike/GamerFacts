import React, { useReducer } from "react";
import GamesContext from "./gamesContext";
import gamesReducer from "./gamesReducer";
import axios from "axios";
import {
  GET_GAMES,
  GAME_ERROR,
  GET_GAME,
  DELETE_GAME,
  ADD_GAME,
  UPDATE_GAME,
  CLEAR_FILTER,
} from "../types";

const GamesState = (props) => {
  const initialState = {
    games: null,
  };

  const [state, dispatch] = useReducer(gamesReducer, initialState);

  //READ - Get Games
  const getGames = async () => {
    try {
      const res = await axios.get("/api/games");

      dispatch({
        type: GET_GAMES,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: GAME_ERROR,
        payload: error.response.msg,
      });
      console.log(error);
    }
  };

  // Add game
  const addGame = async (game) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/games", game, config);

      dispatch({
        type: ADD_GAME,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: GAME_ERROR,
        payload: error.response.msg,
      });
      console.log(error);
    }
  };

  //Update Game

  //Delete Game
  const deleteGame = async (id) => {
    try {
      await axios.delete(`/api/games/${id}`);

      dispatch({
        type: DELETE_GAME,
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: GAME_ERROR,
        payload: error.response.msg,
      });
    }
  };

  //FilterGames

  return (
    <GamesContext.Provider
      value={{
        games: state.games,
        addGame,
        getGames,
        deleteGame,
      }}
    >
      {props.children}
    </GamesContext.Provider>
  );
};

export default GamesState;

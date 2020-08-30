import {
  ADD_GAME,
  DELETE_GAME,
  UPDATE_GAME,
  FILTER_GAMES,
  CLEAR_FILTER,
  GET_GAMES,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_GAME:
      return {
        ...state,
        games: [action.payload, ...state.games],
      };
    case GET_GAMES:
      return {
        ...state,
        games: action.payload,
      };
    case DELETE_GAME:
      return {
        ...state,
        games: state.games.filter((game) => game._id !== action.payload),
      };
  }
};

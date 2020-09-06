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
    case UPDATE_GAME:
      return {
        ...state,
        games: state.games.map((game) =>
          game._id === action.payload._id ? action.payload : game
        ),
      };
    case DELETE_GAME:
      return {
        ...state,
        games: state.games.filter((game) => game._id !== action.payload),
      };
    case FILTER_GAMES:
      return {
        ...state,
        filtered: state.games.filter((game) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return game.name.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
  }
};

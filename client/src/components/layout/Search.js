import React, { Fragment, useRef, useContext, useEffect } from "react";

import GamesContext from "../../context/games/gamesContext";

const Search = () => {
  const gamesContext = useContext(GamesContext);
  const text = useRef("");

  const { filterGames, clearFilter, filtered } = gamesContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterGames(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <Fragment>
      <form id="searchForm">
        <input
          type="text"
          placeholder="Search games "
          onChange={onChange}
          ref={text}
          className="searchBar"
        />
        <button>
          <i className="fas fa-search searchBtn"></i>
        </button>
      </form>
    </Fragment>
  );
};

export default Search;

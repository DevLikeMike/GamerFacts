import React from "react";
import GamesContext from "./gamesContext";

const GamessState = (props) => {
  const initialState = {
    games: [
      {
        RockyCanyon: {
          name: "Rocky Canyon",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet minus sed alias at adipisci.",
          img:
            "https://cdn.pixabay.com/photo/2017/09/26/13/50/rv-2788677_960_720.jpg",
        },
      },
      {
        HurtyPlace: {
          name: "Hurty Place",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet minus sed alias at adipisci.",
          img:
            "https://cdn.pixabay.com/photo/2017/09/26/13/50/rv-2788677_960_720.jpg",
        },
      },
    ],
  };

  //Add Game

  //Update Game

  //Delete Game

  //FilterGames

  return <GamesContext.Provider>{props.children}</GamesContext.Provider>;
};

export default GamesState;

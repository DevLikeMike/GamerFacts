import React, { useReducer } from "react";
import GamesContext from "./gamesContext";
import gamesReducer from "./gamesReducer";

const GamesState = (props) => {
  const initialState = {
    games: [
      {
        name: "Arkham City",
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minima tenetur aperiam id nisi autem impedit, assumenda hic rem voluptatum cumque reiciendis magni sunt. Saepe inventore obcaecati repudiandae, ea asperiores temporibus non, ad rem, similique architecto repellat facilis laboriosam maxime numquam dolorem doloribus quo. Neque, officiis exercitationem eum, minima quos libero culpa, error qui assumenda blanditiis autem? Temporibus ullam, recusandae quos qui voluptatibus ad sequi asperiores illum incidunt iusto saepe iure tempora odit doloribus? Pariatur dolore ipsa, incidunt voluptatibus officia a nihil numquam corrupti praesentium dolor obcaecati magnam blanditiis animi maxime quam cupiditate sed vero assumenda odit et. Expedita non totam repudiandae possimus voluptatibus? Beatae vel repellat enim! Ea autem atque deleniti, veniam ipsa at nisi repellendus vel in beatae iure est ex facilis vero itaque enim laudantium ab aliquam fugit necessitatibus! Non labore illum et in pariatur officia vel similique cupiditate iure commodi, esse enim optio minus aliquid eligendi. ",
        img:
          "https://www.mobygames.com/images/covers/l/308071-batman-arkham-city-playstation-3-front-cover.jpg",
        id: 1,
      },
      {
        name: "Hurty Place",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet minus sed alias at adipisci.",
        img:
          "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        id: 2,
      },
    ],
  };

  const [state, dispatch] = useReducer(gamesReducer, initialState);

  //Add Game

  //Update Game

  //Delete Game

  //FilterGames

  return (
    <GamesContext.Provider
      value={{
        games: state.games,
      }}
    >
      {props.children}
    </GamesContext.Provider>
  );
};

export default GamesState;

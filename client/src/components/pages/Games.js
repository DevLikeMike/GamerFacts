import React, { Fragment } from "react";

const Games = () => {
  return (
    <Fragment>
      <div className="showcase">
        <h1>GamerFacts</h1>
        <button>Review A Game Now!</button>
        <p>Welcome to GamerFacts, the ground breaking videogame review site!</p>
        <hr />
        <p>
          Please read the articles created for gamers by gamers. These reviews
          will steer you into the direction on what game to choose for you. New
          games, old games, retro, block-busters, timeless classics, and more!
        </p>
      </div>
      <div className="card-cont">
        <div className="card">
          <img
            src="https://cdn.pixabay.com/photo/2017/09/26/13/50/rv-2788677_1280.jpg"
            alt=""
          />
          <h3>Title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
            doloribus est ex magni neque?
          </p>
        </div>
        <div className="card">
          <img
            src="https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_1280.jpg"
            alt=""
          />
          <h3>Title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
            doloribus est ex magni neque?
          </p>
        </div>
        <div className="card">
          <img
            src="https://cdn.pixabay.com/photo/2014/02/27/16/10/spring-276014_1280.jpg"
            alt=""
          />
          <h3>Title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
            doloribus est ex magni neque?
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Games;

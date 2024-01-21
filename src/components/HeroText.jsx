import React from "react";
import TrailerButton from "./TrailerButton";
import IMDB from "../static/images/imdb-color.png";

const HeroText = ({ stats, movieButton }) => {
  return (
    <>
      <div className="relative pt-9 px-5 xl:px-12">
        <h1 className="text-white shadow-sm xl:text-7xl text-left xl:px-8 md:pt-5 text-4xl sm:text-5xl lg:text-6xl lg:leading-[1.2]  font-medium movie-title">
          {stats[0].original_title}
        </h1>
        <div className="movie-details xl:flex xl:px-8 xl:flex-row xl:justify-between gap:10px lg:flex-col">
          <p className="font-medium text-white details-text md:w-1/2">
            <p className="font-light drop-shadow-md opacity-80 overview">
              {stats[0].overview}
            </p>
            <div className="ratings flex pt-4 gap-2">
              <div className="imdb flex gap-1">
                <img src={IMDB} width={50} />
                <span>{Math.round(stats[0].vote_average)}/10</span>
              </div>
              <div className=" ml-4 year flex gap-1 items-center justify-center">
                <i class="fa-regular fa-clock"></i>
                <span>{new Date(stats[0].release_date).getFullYear()}</span>
              </div>
            </div>
          </p>
          <div className="movie-details w-1/4">
            <TrailerButton site={movieButton} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroText;

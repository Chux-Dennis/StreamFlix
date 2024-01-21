import React, { useState } from "react";
import NullImage from "../static/images/image-fail.png";
import axios from "axios";

const TopReleaseCard = ({ moviedet, actorCheck }) => {
  let API_KEY = "0e475de5e9056c4d6dfc09841688b85e";

  const cardStyle = {
    borderTop: "1px solid rgba(0,0,0,0.1)",
  };
  const [imageFound, setimageFound] = useState();
  const [actorsArray, setActorsArray] = useState([]);
  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = () => {
    setIsFavourite((prevIsFavorite) => !prevIsFavorite);
  };

  function posterTest() {
    if (moviedet.poster_path == null) {
      return false;
    } else {
      return true;
    }
  }

  function ratingTest() {
    if (moviedet.adult === false) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <div className="px-7" style={cardStyle}>
        <div className="flex flex-row gap-5 mb-6 pt-4 pb-4">
          <div
            style={{
              background: posterTest()
                ? `url(https://image.tmdb.org/t/p/w342/${moviedet.poster_path})`
                : `url(${NullImage})`,
            }}
            className="release-img !bg-cover !bg-center !bg-no-repeat"
          ></div>
          <div className="release-details w-full ">
            <div className="title-star relative w-full mt-3 flex items-center justify-between">
              <div>
                <h1 className="font-bold text-lg sm:text-[24px] md:text-2xl release-name">
                  {moviedet.original_title}
                </h1>
              </div>
              <div
                onClick={toggleFavourite}
                className="star-right flex items-center p-3 rounded-[50%] justify-center absolute right-0 bg-slate-500"
              >
                {isFavourite ? (
                  <span
                    style={{ color: "red" }}
                    className="fa-solid fa-heart"
                  ></span> // Heart icon in red
                ) : (
                  <span className="fa-solid fa-heart"></span>
                )}
              </div>
            </div>

            <div className="release-ratings flex gap-2 mt-1 p-1">
              <div className="age-limit text-sm opacity-65 p-1  rounded">
                <span>
                  <i class="fa-solid fa-star mr-1"></i>
                  {moviedet.vote_average.toFixed(2)}
                  {/* {Math.} */}
                </span>
              </div>

              <div className="release-year text-sm opacity-65   p-1  rounded">
                <span>
                  <i class="fa-regular fa-calendar-days mr-1"></i>
                  {new Date(moviedet.release_date).getFullYear()}
                </span>
              </div>
              <div className="series text-sm opacity-65 p-1 rounded">
                <span>
                  <i class="fa-solid fa-tv"></i>{" "}
                  {ratingTest() ? "PG-13" : "18+"}{" "}
                </span>
              </div>
            </div>
            <div className="release-actors mt-">
              <span className="opacity-50">{actorsArray.name}</span>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default TopReleaseCard;

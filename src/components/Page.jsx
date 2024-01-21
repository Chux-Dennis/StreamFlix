import { useEffect, useState } from "react";
import initSearchItems from "./initSearch.cjs";
import failSearch from "./searchFail.cjs";
import axios from "axios";
import TopReleaseCard from "./TopReleaseCard";
import React from "react";
import HeroText from "./HeroText";

const Page = () => {
  const [moviedata, setMovieData] = useState(null);
  const [topMovies, setTopMovies] = useState([]);
  const [imageID, setImageID] = useState("");
  const [trailerSite, setTrailerSite] = useState("");
  let [handleOpacity, setHandleOpacity] = useState(1);

  // For opacity of header
  let styleOpacity = {
    opacity: handleOpacity,
  };

  let API_KEY = "0e475de5e9056c4d6dfc09841688b85e";
  const handleSearch = async function (e) {
    e.preventDefault();
    let query = document.querySelector(".query-box").value;
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );
    if ((response.status = 200)) {
      setMovieData(response.data.results);
      if (response.data.results.length === 0) {
        setMovieData(failSearch);
        setTopMovies(failSearch);
      } else {
        setMovieData(response.data.results);
        setImageID(response.data.results[0].backdrop_path);
        setTopMovies(response.data.results);
        setHandleOpacity(0.5);
        let movieId = response.data.results[0].id;

        const videoIdReq = function (e) {
          const seek = axios
            .get(
              `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
            )
            .then((results) => {
              let x = results.data.results[0].key;
              setTrailerSite(`https://www.youtube.com/watch?v=${x}`);
            });
        };

        videoIdReq();
      }
    } else {
      setMovieData(failSearch);
      setTopMovies(failSearch);
    }
  };

  // THIS FUNCTION IS ACTIVATED ON PAGE INITIAL LOAD

  const [movieContent, setMovieContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const shuffledSearchItems = initSearchItems.sort(
          () => Math.random() - 0.5
        );

        const requests = shuffledSearchItems.map(async (element) => {
          const response = await axios.get(
            "https://api.themoviedb.org/3/search/movie",
            {
              params: {
                api_key: API_KEY,
                query: element,
              },
            }
          );

          // Extract only the details of the first movie from each search
          const firstMovie = response.data.results[0];

          const videoIdReq = function (e) {
            const seek = axios
              .get(
                `https://api.themoviedb.org/3/movie/${firstMovie.id}/videos?api_key=${API_KEY}`
              )
              .then((results) => {
                let x = results.data.results[0].key;
                setTrailerSite(`https://www.youtube.com/watch?v=${x}`);
              });
          };

          videoIdReq();
          return firstMovie;
        });

        const results = await Promise.all(requests);
        setTopMovies(results);
        setMovieData(results);
        setImageID(results[0].backdrop_path);
      } catch (error) {
        console.error("Error during initialization:", error.message);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once

  const renderedComponents = topMovies.map((item, index) => (
    <TopReleaseCard moviedet={item} actorCheck={topMovies} />
  ));
  const initBG = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${imageID})`,
  };

  return (
    <>
      <div
        className="relative flex flex-col bg-center mb-5 hero h-screen overflow-scroll bg-no-repeat bg-cover"
        style={initBG}
      >
        <header
          class=" hover:opacity-100 bg-black mt-4 mx-10 rounded-xl z-10 px-4 py-4 md:px-8 md:pt-5 lg:pt-6 xl:px-12"
          style={styleOpacity}
        >
          <div class="container lg:pt-0 sm:pt-3 grid grid-cols-2 grid-rows-2 gap-4 mx-auto lg:flex lg:justify-between lg:gap-0 lg:items-center md:gap-5">
            <a
              class="flex items-center space-x-2 sm:space-x-3 md:space-x-5"
              href="/"
            >
              <div class="w-9 md:w-auto">
                <i class="fa-solid fa-video text-3xl"></i>
              </div>
              <span class="text-lg md:text-2xl sm:text-xl logo-text">
                StreamFlix
              </span>
            </a>
            <div class="flex items-center space-x-3 justify-end lg:justify-start lg:order-3 md:space-x-5">
              <span class="text-sm font-bold text-white md:text-[1rem]"></span>
              <div class="w-8 md:w-auto cursor-pointer.">
                <a href="https://twitter.com/chuxdennis">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
              </div>
            </div>
            <form
              onSubmit={handleSearch}
              class="flex justify-between items-center rounded-lg border-2 border-lightestGray text-white p-1 pl-3 pr-1 md:pl-4 md:pr-2 col-span-2 lg:flex-1 lg:max-w-[525px] "
            >
              <input
                type="text"
                placeholder="What movie are you searching?"
                class="w-10/12 query-box bg-transparent placeholder:text-red-50 focus:outline-none"
                readOnly={false}
              />
              <button type="submit" class="p-2 focus:outline-none">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </button>
            </form>
          </div>
        </header>
        <div
          className="relative mx-5 rounded-lg lg:rounded-lg sm:rounded-sm my-4 inner-hero h-screen bg-no-repeat bg-cover"
          style={
            {
              // backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${imageID})`,
            }
          }
        >
          {moviedata && (
            <HeroText stats={moviedata} movieButton={trailerSite} />
          )}
        </div>
      </div>

      {/* --------------------------------------------------------------------------------------------------------- */}
      <div className="mt-10">
        <div className="flex  px-6 justify-between title-icon mb-10 items-center">
          <h1 className="font-semibold text-2xl top-title  release-title md:text-[25px] ">
            Top Releases
          </h1>
          <i class="fa-solid fa-star-of-life text-lg"></i>
        </div>
        <div className="">{renderedComponents}</div>
      </div>
    </>
  );
};

export default Page;

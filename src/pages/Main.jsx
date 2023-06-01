import React, { useState, useEffect } from "react";
import axios from "axios";
import Requests from "../Requests.js";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length - 1)];

  useEffect(() => {
    axios.get(Requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className=" h-[600px] w-full text-white">
      <div className="h-full w-full">
        <div className="absolute h-[600px] w-full bg-gradient-to-r from-black"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute top-[20%] w-full p-4 md:p-8 ">
          <h1 className="text-bold mb-4 text-3xl font-bold md:text-5xl ">
            {movie?.title}
          </h1>
          <div>
            <button className="border border-gray-200 bg-gray-200 p-5 py-2 text-black ">
              Play
            </button>
            <button className="ml-4 border border-gray-200 p-5 py-2 text-gray-200 ">
              Watch Later
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-400 ">
            Released: {movie?.release_date}
          </p>
          <p className="  md:w-3/5 md:text-base ">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

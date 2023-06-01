import React, { useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import axios from "axios";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  console.log(movies);

  return (
    <>
      <h2 className="p-4 font-bold text-white md:text-xl ">{title} </h2>
      <div className=" relative flex items-center ">
        <div id={"slider"}>
          {movies.map((item, id) => (
            <div
              key={id}
              className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]"
            >
              <img
                className="block h-full w-full"
                src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                alt={item.title}
              />
              <div className=" absolute left-2 top-2 h-full w-full text-white opacity-0 hover:bg-black/80 hover:opacity-100   ">
                <FaRegHeart className="absolute left-2 top-2 text-base text-gray-200  md:text-2xl " />
                <p className="white-space-normal flex h-full items-center justify-center text-center text-xs font-bold md:text-sm ">
                  {item?.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;

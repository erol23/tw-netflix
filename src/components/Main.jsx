import React, { useEffect, useState } from "react";
import axios from "axios";
import Requests from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getData(Requests.requestPopular);
  }, []);

  const getData = async (API) => {
    const { data } = await axios.get(API);
    setMovies(data.results);
  };

  const truncate = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const topMovie = movies[Math.floor(Math.random() * movies.length)];

  console.log(topMovie);
  return (
    <div className="w-full h-[550px] text-white">
      <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
      <img
        className="w-full h-full object-fit"
        src={`https://image.tmdb.org/t/p/original/${topMovie?.backdrop_path}`}
        alt={topMovie?.title}
      />
      <div className="absolute w-full top-[20%] p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl">{topMovie?.title}</h1>
        <div className="my-4">
          <button className="border border-gray-300 bg-white text-black py-2 p-10 px-5">
            Play
          </button>
          <button className="border border-gray-300 text-white ml-4 py-2 px-5">
            Watch Later
          </button>
        </div>
        <p className="text-gray-400 text-sm">
          Released: {topMovie?.release_date}
        </p>
        <p className="w-full text-gray-200 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[30%]">
          {truncate((topMovie?.overview),150)}
        </p>
      </div>
    </div>
  );
};

export default Main;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

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
      <h1 className="text-white font-bold md:text-xl p-4">{title}</h1>
      <div className="relative flex items-center">
        <MdChevronLeft
          className="bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 absolute left-0 hover:block focus:text-black"
          size={40}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide "
        >
          {movies.map((movie, id) => {
            return <Movie movie={movie} key={id} />;
          })}
        </div>
        <MdChevronRight
          type="button"
          data-te-target="#slider"
          data-te-slide="next"
          className="bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 absolute right-0"
          size={40}
        />
      </div>
    </>
  );
};

export default Row;

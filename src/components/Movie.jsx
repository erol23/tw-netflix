import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({movie}) => {
    const [liked, setLiked] = useState(false);
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative cursor-pointer p-2 ">
                <img
                  className="w-full h-auto block"
                  src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
                  alt={movie?.title}
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white  ">
                  <p className="  text-xs font-bold flex justify-center items-center h-full text-center">
                    {movie?.title}
                  </p>

                  <p>
                    {liked ? (
                      <FaHeart className="absolute top-4 left-4 text-gray-300" />
                    ) : (
                      <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
                    )}
                  </p>
                </div>
              </div>
  )
}

export default Movie
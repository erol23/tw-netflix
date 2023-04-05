import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import defImg from "../asset/movie.png";
import { useNavigate } from "react-router-dom";

const Movie = ({ movie }) => {
  const [like, setLike] = useState(false);
  const navigate = useNavigate();
  const { user, likedMovie } = UserAuth();

  const handleLiked = async () => {
    if (user?.email) {
      setLike(!like);
      const favMovie = {
        id: movie.id,
        title: movie.title,
        img: movie.backdrop_path,
      };
      await likedMovie(favMovie);
    } else {
      alert("Please log in to like a movie");
    }
  };

  const handleClick = () => {
    navigate("/detail", { state: movie });
  };
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative cursor-pointer p-2 ">
      <img
        className="w-full block"
        src={
          movie?.backdrop_path
            ? `https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`
            : defImg
        }
        alt={movie?.title}
      />
      <div
        className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white"
        onClick={handleClick}
      >
        <p className="  text-xs font-bold flex justify-center items-center h-full text-center">
          {movie?.title}
        </p>

        <p onClick={handleLiked}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;

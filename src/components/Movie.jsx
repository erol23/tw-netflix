import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase/firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import defImg from "../asset/movie.png";

const Movie = ({ movie }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();
  const movieID = doc(db, "users", `${user?.email}`);

  const handleLiked = async() => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);

      await updateDoc(movieID, {
        favoriteMovies: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to like a movie");
    }
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
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white  ">
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

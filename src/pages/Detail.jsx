import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import defImg from "../asset/movie.png";
import { UserAuth } from "../context/AuthContext";

const Detail = () => {
  const [trailer, setTrailer] = useState();
  const location = useLocation();
  const { likedMovie } = UserAuth();
  const res = location.state;

  const API_KEY = process.env.REACT_APP_API_KEY;
  const VIDEO_BASE_URL = `https://api.themoviedb.org/3/movie/${res.id}/videos?api_key=${API_KEY}`;

  useEffect(() => {
    const getVideo = async () => {
      const { data } = await axios(VIDEO_BASE_URL);
      setTrailer(data);
    };

    getVideo();
  }, [VIDEO_BASE_URL]);


  

  const handleWatch = async () => {
    const favMovie = {
      id: res.id,
      title: res.title,
      img: res.backdrop_path,
    };
    await likedMovie(favMovie);
  };

  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return "bg-green-700";
    } else if (vote >= 6) {
      return "bg-orange-700";
    } else {
      return "bg-red-700";
    }
  };


  return (
    <>
      <div className="w-full h-[550px] text-white">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-fit"
          src={
            res?.backdrop_path
              ? `https://image.tmdb.org/t/p/original/${res?.backdrop_path}`
              : defImg
          }
          alt={res?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl">{res?.title}</h1>
          <div className="my-4">
            <button className="border border-gray-300 bg-white text-black py-2 p-10 px-5">
              Play
            </button>
            <button className="border border-gray-300 text-white ml-4 py-2 px-5" onClick={handleWatch}>
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">Released: {res?.release_date}</p>
        </div>
      </div>
      <div className="w-full h-[350px] flex items-center justify-evenly">
        {trailer?.results.length && (
          <iframe
            src={`https://www.youtube.com/embed/${trailer?.results[0].key}?autoplay=1&mute=1`}
            frameborder="0"
            title="youtube video"
            className="w-[30%] h-full"
          ></iframe>
        )}

        <div className="w-[30%]">
          <p className="text-white inline-block">{res?.overview}</p>
          <p className="text-white mt-5">
            Vote Average:
            <span className={`${setVoteClass(res?.vote_average)} ml-3`}>
              {res?.vote_average}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Detail;

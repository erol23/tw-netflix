import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const [trailer, setTrailer] = useState();
  const location = useLocation();
  const res = location.state;

  useEffect(() => {
    getVideo();
  }, []);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const VIDEO_BASE_URL = `https://api.themoviedb.org/3/movie/${res.id}/videos?api_key=${API_KEY}`;

  const getVideo = async () => {
    const { data } = await axios(VIDEO_BASE_URL);
    setTrailer(data);
  };

  console.log(res);

  return (
    <>
      <div className="w-full h-[550px] text-white">
      <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
      <img
        className="w-full h-full object-fit"
        src={`https://image.tmdb.org/t/p/original/${res?.backdrop_path}`}
        alt={res?.title}
      />
      <div className="absolute w-full top-[20%] p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl">{res?.title}</h1>
        <div className="my-4">
          <button className="border border-gray-300 bg-white text-black py-2 p-10 px-5">
            Play
          </button>
          <button className="border border-gray-300 text-white ml-4 py-2 px-5">
            Watch Later
          </button>
        </div>
        <p className="text-gray-400 text-sm">
          Released: {res?.release_date}
        </p>
      </div>
    </div>
      <div className="w-full h-[350px] flex">
        <iframe
          src={`https://www.youtube.com/embed/${trailer?.results[0].key}?autoplay=1&mute=1`}
          frameborder="0"
          title="youtube video"
          className="w-6/12 h-full"
        ></iframe>
        <p className="text-white w-6/12">{res?.overview}</p>
      </div>
    </>
  );
};

export default Detail;

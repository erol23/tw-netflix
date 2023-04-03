import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const [trailer, setTrailer] = useState();
  const location = useLocation();
  const res = location.state;

  useEffect(() => {
    getVideo();
  }, [])

  const API_KEY = process.env.REACT_APP_API_KEY;
  const VIDEO_BASE_URL = `https://api.themoviedb.org/3/movie/${res.id}/videos?api_key=${API_KEY}`;

  const getVideo = async () => {
    const {data} = await axios(VIDEO_BASE_URL)
    setTrailer(data)
  }

  console.log(trailer)

  return (
    <img
      className="w-full h-full object-fit"
      src={`https://image.tmdb.org/t/p/original/${res?.backdrop_path}`}
      alt={res?.title}
    />
  );
};

export default Detail;

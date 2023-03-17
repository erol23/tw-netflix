const key = process.env.REACT_APP_API_KEY;

const requests = [
  {
    title: "Popular",
    url: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  },

  {
    title: "Top Rated",
    url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  },
  {
    title: "Trending",
    url: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  },
  {
    title: " Horror",
    url: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  },
  {
    title: "Up Coming:",
    url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  },
];
export default requests;
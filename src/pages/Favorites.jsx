// import SavedMovies from "../components/SavedMovies";

const Favorites = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className=" w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d049a3bd-40ee-411b-9f16-d1def798d43b/c9dbf687-1db4-4ae1-9d36-f3500ac09859/TR-en-20230313-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Favourites</h1>
        </div>
      </div>
      {/* <SavedMovies /> */}
    </>
  );
};

export default Favorites;
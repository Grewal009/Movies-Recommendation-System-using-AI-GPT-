import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log("POPULAR", movies?.popularMovies);

  return (
    <div className="bg-black">
      <div className="-mt-8 md:-mt-[60px] lg:-mt-[200px] relative">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        {/* <MovieList title={"Popular"} movies={movies?.popularMovies} /> */}
        <MovieList title={"Upcoming"} movies={movies?.upComingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;

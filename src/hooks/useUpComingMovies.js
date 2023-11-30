import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies, addUpComingMovies } from "../utils/moviesSlice";

const useUpComingMovies = () => {
  // fetch data from TMDB API and update store
  const dispatch = useDispatch();

  //api call
  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log("upcomming movies : ", json.results);
    dispatch(addUpComingMovies(json.results));
  };
  useEffect(() => {
    getUpComingMovies();
  }, []);
};

export default useUpComingMovies;

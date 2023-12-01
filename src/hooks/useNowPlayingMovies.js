import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  // fetch data from TMDB API and update store
  const dispatch = useDispatch();

  //check if data in store don't not make API call
  const nowPlayingMov = useSelector((store) => store.movies.nowPlayingMovies);

  //api call
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    if (!nowPlayingMov) getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;

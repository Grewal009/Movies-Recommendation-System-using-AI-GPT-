import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  // fetch data from TMDB API and update store
  const dispatch = useDispatch();
  const popularMov = useSelector((store) => store.movies.popularMovies);

  //api call
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log("popular : ", json.results);
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    !popularMov && getPopularMovies();
  }, []);
};

export default usePopularMovies;

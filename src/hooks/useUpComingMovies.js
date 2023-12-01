import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpComingMovies } from "../utils/moviesSlice";
import { useSelector } from "react-redux";

const useUpComingMovies = () => {
  // fetch data from TMDB API and update store
  const dispatch = useDispatch();
  const upComingMov = useSelector((store) => store.movies.upComingMovies);

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
    !upComingMov && getUpComingMovies();
  }, []);
};

export default useUpComingMovies;

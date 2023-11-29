import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  console.log(id);

  // fetching trailer video and updating the store i.e. moviesSlice
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json);
    console.log("video data ", json.results);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    console.log(filterData);

    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer.key);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;

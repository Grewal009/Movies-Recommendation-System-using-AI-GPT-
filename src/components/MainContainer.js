import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  //early return
  // if(!movies) return;
  if (movies === null) return;

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="-mt-24">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;

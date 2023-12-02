import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { gptMovies, gptMovieNames } = gpt;

  if (!gptMovieNames) return null;

  return (
    <div className="p-1 md:p-2 bg-black text-white bg-opacity-70">
      {gptMovieNames.map((movie, index) => (
        <MovieList key={movie} title={movie} movies={gptMovies[index]} />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;

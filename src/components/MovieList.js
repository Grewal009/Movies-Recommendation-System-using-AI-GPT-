import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("movies :  ", movies);
  if (!movies) return;
  return (
    <div className="px-1 md:px-2">
      <h3 className="text-xl md:text-xl font-bold pt-2 md:pt-4 pb-1 md:pb-2 mx-4 text-slate-200">
        {title}
      </h3>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterpath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

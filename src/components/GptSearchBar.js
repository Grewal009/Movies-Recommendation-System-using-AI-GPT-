import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const language = useSelector((store) => store.config.configLang);

  //search for movie in TMDB database
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log("json : ", json);
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    //make a call to GPT API and get movies result
    const gptResults = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content:
            "Act as MOVIE Recommendation System and suggest some movies for the query : " +
            searchText.current.value +
            ". Only give me names of 5 movies, comma separeted like the example result given ahead. Example Result : Gadar, Sholay, Don, Golmall, Indian",
        },
      ],
      model: "gpt-3.5-turbo",
    });
    // error handling
    if (!gptResults.choices) return null;

    console.log("GPT Result: ", gptResults.choices[0].message.content);

    //convert string data into array of elements separated by commas
    const gptMovies = gptResults.choices[0].message.content.split(", ");
    console.log("gptMovies : ", gptMovies);
    // it will return 5 promises in an array because of async function
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    console.log("promiseArray : ", promiseArray);

    //it will only finish once my all promises are resolved
    const tmdbResult = await Promise.all(promiseArray);
    console.log("tmdbResult : ", tmdbResult);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResult })
    );
  };

  return (
    <div className="flex justify-center pt-28 pb-10 ">
      <form
        className="w-full grid grid-cols-12 p-2 bg-gray-800 md:rounded-lg md:w-[60%] "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="py-1 px-2 text-gray-800 rounded-md col-span-12 md:col-span-10  md:px-2 md:mr-2 md:font-bold "
          type="text"
          placeholder={lang[language].searchPlaceholderText}
        />
        <button
          className="col-span-12 mt-2 py-1  md:col-span-2  bg-red-600 text-white rounded-md md:py-1 md:px-2 md:m-0"
          onClick={handleGptSearchClick}
        >
          {/* lang.language.searchBtn gives error to make it dynamic use [] for language*/}
          {lang[language].searchBtn}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

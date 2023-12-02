import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          src={BG_IMAGE}
          alt="background-img"
          className="h-screen w-full object-cover md:w-screen"
        />
      </div>
      <div className="pt-4 md:pt-10">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;

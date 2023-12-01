import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";
const GptSearchBar = () => {
  const language = useSelector((store) => store.config.configLang);
  return (
    <div className="flex justify-center pt-28 pb-10 ">
      <form className="w-[80%] grid grid-cols-12 p-2 bg-gray-800 rounded-lg">
        <input
          className="py-2 px-3 mr-2 rounded-md col-span-10"
          type="text"
          placeholder={lang[language].searchPlaceholderText}
        />
        <button className="col-span-2  bg-red-600 text-white rounded-md">
          {/* lang.language.searchBtn gives error to make it dynamic use [] for language*/}
          {lang[language].searchBtn}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

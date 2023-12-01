import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterpath }) => {
  console.log("posterpath : ", IMG_CDN_URL + posterpath);
  if (!posterpath) return null;
  return (
    <div className="w-48  pr-2">
      <img src={IMG_CDN_URL + posterpath} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;

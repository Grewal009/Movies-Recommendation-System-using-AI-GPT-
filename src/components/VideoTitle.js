import { useDispatch, useSelector } from "react-redux";

import { muteAudio, unMuteAudio } from "../utils/moviesSlice";
import { VscMute } from "react-icons/vsc";
import { VscUnmute } from "react-icons/vsc";

const VideoTitle = ({ title, overview }) => {
  const dispatch = useDispatch();
  const toggleAudioButton = useSelector((store) => store.movies.mute);
  const mAudio = () => {
    dispatch(muteAudio());
  };
  const umAudio = () => {
    dispatch(unMuteAudio());
  };
  return (
    <div className="pt-[20%] px-6 md:px-14  absolute text-white bg-gradient-to-r from-black to-50% w-screen aspect-video">
      <h1 className="text-3xl md:text-4xl md:-mb-4 md:font-bold">{title}</h1>
      <p className="hidden md:inline-block md:py-6 md:text-base md:w-[450px] md:leading-5">
        {overview}
      </p>
      <div className="md:-my-4 md:-mx-2">
        {toggleAudioButton ? (
          <button
            className="px-3 py-1 my-1 bg-white md:mx-2 text-black md:px-12 md:py-2 md:text-lg font-bold bg-opacity-90 rounded-lg hover:bg-opacity-80"
            onClick={umAudio}
          >
            <VscUnmute size={20} />
          </button>
        ) : (
          <button
            className="px-3 py-1 my-1 bg-white md:mx-2 text-black md:px-12 md:py-2 md:text-lg font-bold bg-opacity-90 rounded-lg hover:bg-opacity-80"
            onClick={mAudio}
          >
            <VscMute size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoTitle;

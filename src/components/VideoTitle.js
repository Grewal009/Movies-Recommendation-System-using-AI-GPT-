const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-14 absolute text-white bg-gradient-to-r from-black to-50% w-screen aspect-video">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-base w-[450px]">{overview}</p>
      <div className="">
        <button className="bg-white mx-2 text-black px-12 py-2 text-lg font-bold bg-opacity-90 rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-slate-500 text-white px-12 py-2 text-lg font-bold bg-opacity-80 rounded-lg mx-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const BG_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/db6c3334-0569-4cf8-af49-e07405d94902/NO-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_API_OPTIONS,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "norsk", name: "Norsk" },
  { identifier: "hindi", name: "Hindi" },
];

export const OPENAI_GPT = process.env.REACT_APP_OPENAI_KEY;

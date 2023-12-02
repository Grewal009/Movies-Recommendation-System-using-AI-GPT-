import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/langSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const gptSearchBtn = useSelector((store) => store.gpt.showGptSearch);

  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //toggle GPT Search button
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="flex">
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black to-90% z-10 flex w-full justify-between items-center flex-col md:flex-row ">
        <img className="w-36 md:w-44 " src={LOGO} alt="logo" />
        {user && (
          <div className="flex gap-4 md:gap-8">
            {gptSearchBtn && (
              <select
                onChange={handleLanguageChange}
                className="w-[86px]  py-1 font-medium bg-gray-800 text-slate-300 rounded-lg hover:bg-slate-700 cursor-pointer"
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              onClick={handleGptSearchClick}
              className="w-32 bg-green-800  py-1 font-medium rounded-lg text-slate-300 hover:bg-green-700"
            >
              {gptSearchBtn ? "Home" : "GPT Search"}
            </button>
            {/* <p className="mx-2 font-bold text-slate-200 text-2xl">
              {user?.displayName}
            </p> */}
            <button
              className="w-20 py-1 rounded-lg font-medium bg-slate-300 text-gray-800 hover:bg-slate-200 md:mr-4 "
              onClick={handleSignOut}
            >
              Signout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

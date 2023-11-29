import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  return (
    <div className="flex">
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black to-90% z-10 flex w-full justify-between items-center">
        <img className="w-44 " src={LOGO} alt="logo" />
        {user && (
          <div className="flex items-center">
            <p className="mx-5 font-bold text-slate-200 text-2xl">
              {user?.displayName}
            </p>
            <button
              className="w-20 h-10 rounded-lg font-bold bg-slate-300 hover:bg-slate-200  "
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

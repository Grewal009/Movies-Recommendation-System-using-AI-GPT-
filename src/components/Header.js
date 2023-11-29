import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="flex">
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex w-full justify-between items-center">
        <img
          className="w-44 "
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
        {user && (
          <div className="flex items-center">
            <p className="mx-5 font-bold text-black text-2xl">
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

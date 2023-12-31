import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateDataSU, checkValidateDataSI } from "../utils/validate";
import { BG_IMAGE } from "../utils/constants";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setErrorMessage(null);
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    const errormsg = isSignInForm
      ? checkValidateDataSI(email.current.value, password.current.value)
      : checkValidateDataSU(
          name.current.value,
          email.current.value,
          password.current.value
        );
    setErrorMessage(errormsg);

    // if errormsg then return
    if (errormsg) return;

    //Sign-in/Sign-up
    if (!isSignInForm) {
      //Sign-up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              console.log("name updated");
              console.log(user);

              //use updated user from auth
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMessage(errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      //Sign-in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div className="">
      <Header />
      <div className="absolute -z-20 ">
        <img
          src={BG_IMAGE}
          alt="background-img"
          className="h-screen w-full object-cover md:w-screen"
        />
      </div>
      <div className="w-full h-screen flex justify-center items-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="p-4 md:p-12 bg-black w-[90%] md:w-[500px] text-white  right-0 left-0 rounded-lg bg-opacity-80"
        >
          <h1 className="text-2xl md:text-3xl py-1 mb-2">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-2 mb-2 w-full bg-gray-800 rounded-lg"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-2 mb-2 w-full bg-gray-800 rounded-lg"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 w-full bg-gray-800 rounded-lg"
          />
          <p className="text-red-700 font-bold text-base p-1 ">
            {errorMessage}
          </p>
          <button
            onClick={handleButtonClick}
            className="p-2  bg-red-700 w-full rounded-lg"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p onClick={toggleSignInForm} className="mt-1 cursor-pointer">
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In."}
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;

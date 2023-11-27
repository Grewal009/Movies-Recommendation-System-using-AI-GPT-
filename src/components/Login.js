import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/db6c3334-0569-4cf8-af49-e07405d94902/NO-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-img"
        />
      </div>
      <form className="absolute p-12 bg-black w-[500px] my-32 text-white mx-auto right-0 left-0 rounded-lg bg-opacity-90">
        <h1 className="text-3xl p-2 m-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full bg-gray-800 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 w-full bg-gray-800 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-800 rounded-lg"
        />
        <button className="p-2 m-2 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="m-2 p-2 cursor-pointer">
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In."}
        </p>
      </form>
    </div>
  );
};
export default Login;

import Header from "./Header";

const Login = () => {
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
        <h1 className="text-3xl p-4 m-4">Sign In</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 m-4 w-full bg-gray-800 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-4 w-full bg-gray-800 rounded-lg"
        />
        <button className="p-4 m-4 bg-red-700 w-full rounded-lg">
          Sign In
        </button>
        <p className="m-4 p-4">New to Netflix? Sign Up Now</p>
      </form>
    </div>
  );
};
export default Login;

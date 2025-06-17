import { useState } from "react";
import { assets } from "../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setcurrState] = useState("Sign Up");

  return (
    <div className="absolute z-10 w-full h-full bg-[#00000090] grid">
      <form className="place-self-center w-[max(23vw,330px)] bg-white text-[#808080] flex flex-col gap-6 py-6 px-8 rounded-lg transition-all duration-300">
        <div className="flex justify-between items-center text-black">
          <h2 className="font-bold">{currState}</h2>

          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Cut Icon"
            className="cursor-pointer w-4"
          />
        </div>
        <div className="flex flex-col gap-5">
          {currState === "Sign Up" && (
            <input
              type="text"
              placeholder="Your Name"
              required
              className="outline-0 border border-[#c9c9c9] rounded-sm p-1"
            />
          )}
          <input
            type="email"
            placeholder="Your Email"
            required
            className="outline-0 border border-[#c9c9c9] rounded-sm p-1"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="outline-0 border border-[#c9c9c9] rounded-sm p-1"
          />
        </div>

        <button className="border-0 p-1 rounded-sm text-white text-base bg-orange-500 cursor-pointer">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>

        <div className="flex items-start gap-2 -mt-4">
          <input type="checkbox" required className="mt-1 cursor-pointer" />
          <p>by Continueing, i agree to the terms of use & privacy policy</p>
        </div>

        {currState === "Login" ? (
          <p>
            Create a new Account?{" "}
            <span
              onClick={() => setcurrState("Sign Up")}
              className="cursor-pointer text-orange-400 font-medium"
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            already have an Account?{" "}
            <span
              onClick={() => setcurrState("Login")}
              className="cursor-pointer text-orange-400 font-medium"
            >
              Click here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;

import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import toast from "react-hot-toast";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setcurrState] = useState("Sign Up");
  const [showAnim, setShowAnim] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(
      currState === "Sign Up"
        ? "Account created successfully!"
        : "Logged in successfully!"
    );

    console.log(formData);
  };

  useEffect(() => {
    setTimeout(() => setShowAnim(true), 10);
  }, []);

  const handleClose = () => {
    setShowAnim(false);
    setTimeout(() => setShowLogin(false), 300);
  };
  return (
    <div className="absolute z-10 w-full h-full bg-[#00000090] grid">
      <form
        onSubmit={handleSubmit}
        className={`place-self-center w-[max(23vw,330px)] bg-white text-[#808080] flex flex-col gap-6 py-6 px-8 rounded-lg transition-all duration-300 transform ${
          showAnim ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <div className="flex justify-between items-center text-black">
          <h2 className="font-bold">{currState}</h2>

          <img
            onClick={handleClose}
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
              name="fullName"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              required
              className="outline-0 border border-[#c9c9c9] rounded-sm p-1"
            />
          )}
          <input
            type="email"
            placeholder="Your Email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            required
            className="outline-0 border border-[#c9c9c9] rounded-sm p-1"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            required
            className="outline-0 border border-[#c9c9c9] rounded-sm p-1"
          />
        </div>

        <button
          type="submit"
          className="border-0 p-1 rounded-sm text-white text-base bg-orange-500 cursor-pointer"
        >
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

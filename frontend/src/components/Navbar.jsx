import { useState } from "react";
import { assets } from "../assets/assets";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const navItems = ["home", "menu", "mobile-app", "contact-us"];

  return (
    <div className="w-[80%] mx-auto py-5 px-0 flex items-center justify-between">
      <img
        src={assets.logo}
        alt="logo"
        className="w-36 max-[900px]:w-28 max-[1050px]:w-32"
      />

      <nav className="flex list-none gap-6 max-[750px]:hidden max-[900px]:gap-3.5 max-[1050px]:gap-5 max-[900px]:text-base max-[1050px]:text-[17px] text-lg">
        {navItems.map((item) => (
          <a
            href={item === "home" ? "/" : `#${item}`}
            key={item}
            className="relative cursor-pointer capitalize pb-1"
            onClick={() => setMenu(item)}
          >
            {item.replace("-", " ")}
            <span
              className={`absolute left-0 bottom-0 h-0.5 w-full bg-black transition-all duration-300 origin-left ${
                menu === item ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-9 max-[900px]:gap-5 max-[1050px]:gap-8">
        <img
          src={assets.search_icon}
          alt="search"
          className="w-6 max-[900px]:w-5 max-[1050px]:w-[22px]"
        />

        <div className="relative">
          <img
            src={assets.basket_icon}
            alt="basket"
            className="w-6 max-[900px]:w-5 max-[1050px]:w-[22px]"
          />

          <div className="absolute size-3 bg-[var(--tomato)] rounded-full -top-2 -right-2"></div>
        </div>
        <button
          className="bg-transparent text-base border border-[var(--tomato)] py-2.5 max-[900px]:py-1.5 max-[1050px]:py-[8px] px-7 max-[900px]:px-5 max-[1050px]:px-6 rounded-full cursor-pointer hover:bg-[#fff4f2]"
          onClick={() => setShowLogin(true)}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;

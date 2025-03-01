import React, { useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const navItems = ["home", "menu", "mobile-app", "contact-us"];

  return (
    <div className="py-5 px-0 flex items-center justify-between">
      <img src={assets.logo} alt="logo" className="w-36" />

      <nav className="flex list-none gap-5 text-lg">
        {navItems.map((item) => (
          <li
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
          </li>
        ))}
      </nav>

      <div className="flex items-center gap-10">
        <img src={assets.search_icon} alt="search" />

        <div className="relative">
          <img src={assets.basket_icon} alt="basket" />

          <div className="absolute size-3 bg-[var(--tomato)] rounded-full -top-2 -right-2"></div>
        </div>
        <button className="bg-transparent text-base border border-[var(--tomato)] py-[10px] px-7 rounded-full cursor-pointer hover:bg-[#fff4f2]">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { assets } from "../../assets/assets";
const Navbar = () => {
  return (
    <div className="py-5 px-0 flex items-center justify-between">
      <img src={assets.logo} alt={assets.logo} className="w-36" />
      <nav className="flex list-none gap-5 gray text-lg">
        <li>home</li>
        <li>menu</li>
        <li>mobile app</li>
        <li>contact us</li>
      </nav>
      <div className="flex items-center gap-10">
        <img src={assets.search_icon} alt={assets.search_icon} />
        <div>
          <img src={assets.basket_icon} alt={assets.basket_icon} />
          <div></div>
        </div>
        <button className="bg-transparent text-base gray border border-[#ff6347] py-[10px] px-7 rounded-full cursor-pointer hover:bg-[#fff4f2]">
          sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;

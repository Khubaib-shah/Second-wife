import React from "react";
import { menu_list } from "../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex gap-5 flex-col" id="menu">
      <h1 className="text-[#262626] font-medium text-2xl">Explore Our menu</h1>
      <p className="max-w-[60%] text-[#808080] max-[1050px]:max-w-full">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit sequi
        mollitia, fuga, consequuntur totam repellendus saepe, et doloremque
        fugit sed est sapiente
      </p>
      <div className="flex items-center justify-between gap-8 text-center my-5 mx-0 overflow-x-scroll scroll-hidden">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={`${
                category === item.menu_name
                  ? "border-amber-900 border-4 p-1"
                  : ""
              } w-[7.5vw] cursor-pointer min-w-20 rounded-full transition-all duration-[100ms]`}
            />
            <p className="mt-2.5 gray">{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr className="my-2.5 mx-0 h-0.5 bg-[#e2e2e2] border-none" />{" "}
    </div>
  );
};

export default ExploreMenu;

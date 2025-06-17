import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="mt-8" id="food_display">
      <h2 className="text-2xl font-semibold ">Top dishes near you</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-8  gap-y-12 mt-5">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return <FoodItem key={index} item={item} />;
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;

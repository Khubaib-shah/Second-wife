import { useContext } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ item }) => {
  const { _id, description, name, price, image } = item;
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="w-full m-auto rounded-[15px] shadow transition animate-fadeIn">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full rounded-t-[15px]"
          loading="lazy"
        />

        {!cartItems[_id] ? (
          <img
            src={assets.add_icon_white}
            alt="add"
            className="w-9 absolute bottom-3.5 right-3.5 cursor-pointer rounded-full transition hover:scale-110"
            onClick={() => addToCart(_id)}
          />
        ) : (
          <div className="absolute bottom-3.5 right-3.5 flex items-center gap-2.5 p-2 rounded-full bg-white shadow-md">
            <img
              src={assets.remove_icon_red}
              alt="remove"
              className="w-8 cursor-pointer transition hover:scale-110"
              onClick={() => removeFromCart(_id)}
            />
            <p className="text-sm font-semibold">{cartItems[_id] || 0}</p>
            <img
              src={assets.add_icon_green}
              alt="add"
              className="w-8 cursor-pointer transition hover:scale-110"
              onClick={() => addToCart(_id)}
            />
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex justify-between items-center mb-2.5">
          <p className="text-[20px] font-medium">{name}</p>
          <img
            src={assets.rating_starts}
            alt="rating"
            className="w-[70px]"
            loading="lazy"
          />
        </div>

        <p className="text-gray-600 text-xs">{description}</p>
        <p className="text-[var(--tomato)] text-2xl font-medium my-2.5">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;

import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
const Cart = () => {
  const { food_list, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  console.log(getTotalCartAmount());
  return (
    <div className="cart">
      <div className="cart-item">
        <div
          className="grid grid-cols-12 items-center text-gray-400 text-[max(1vw.,12px)]"
          style={{ gridTemplateColumns: "1fr 1.3fr 1fr 1fr 1fr 0.5fr" }}
        >
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div
                  className="grid grid-cols-12 items-center text-gray-500 text-[max(1vw.,12px)] my-2.5 mx-0 "
                  style={{ gridTemplateColumns: "1fr 1.5fr 1fr 1fr 1fr 0.5fr" }}
                >
                  <img src={item.image} alt="Cart items" className="w-12" />

                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    className="cursor-pointer"
                    onClick={() => removeFromCart(item._id)}
                  >
                    X
                  </p>
                </div>
                <hr className="bg-[#e2e2e2] border-none h-[1px]" />
              </div>
            );
          }
        })}
      </div>

      <div className="mt-20 flex justify-between gap-[max(12vw,20px)] max-[750px]:flex-col-reverse">
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="font-bold">Cart Totals</h2>
          <div>
            <div className="flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="my-2.5 mx-0 border-0 bg-[#555] h-[1px]" />
            <div className="flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr className="my-2.5 mx-0 border-0 bg-[#555] h-[1px]" />

            <div className="flex justify-between">
              <b>Total</b>
              <b>${getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button className="border-0 text-white bg-orange-400 w-[max(15vw,200px)] py-3 px-0 rounded-sm cursor-pointer">
            Proceed to check out
          </button>
        </div>

        <div className="flex-1">
          <div>
            <p className="text-[#555]">
              If you have a promo code, Enter it here
            </p>
            <div className="mt-2.5 flex justify-between items-center bg-[#eaeaea] rounded-sm">
              <input
                type="text"
                placeholder="Enter promo code"
                className="bg-transparent border-0 outline-0 ps-2.5"
              />
              <button className="w-[max(15vw,150px)] py-3 px-1.5 bg-black text-white border-0 rounded-sm">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

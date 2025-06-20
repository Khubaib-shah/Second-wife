import { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const PlaceOrder = () => {
  const { setCartItems, getTotalCartAmount } = useContext(StoreContext);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phoneNumber: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!getTotalCartAmount()) {
      toast("Oops! Nothing in your cart yet.");
      return;
    }
    if (
      !formData.firstName.trim() ||
      !formData.emailAddress.trim() ||
      !formData.street.trim() ||
      !formData.phoneNumber.trim()
    ) {
      toast.error("Fields with * are Required");
      return;
    }
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success(`Thanks, ${formData.firstName}! Order placed.`);
      navigate("/");
      localStorage.setItem("cart", {});

      setCartItems({});
      setFormData({
        firstName: "",
        lastName: "",
        emailAddress: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        phoneNumber: "",
      });
    }, 2000);

    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row  items-center md:items-start justify-between gap-12 mt-24"
    >
      <div className="w-full max-w-custom place-order-left">
        <p className="text-3xl font-semibold mb-12">Delivery Information</p>

        <div className="multi-fields">
          <input
            type="text"
            placeholder="First name *"
            value={formData.firstName}
            name="firstName"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Last name"
            value={formData.lastName}
            name="lastName"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        </div>
        <input
          type="email"
          placeholder="Email address *"
          value={formData.emailAddress}
          name="emailAddress"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Street *"
          value={formData.street}
          name="street"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />

        <div className="multi-fields">
          <input
            type="text"
            placeholder="City"
            value={formData.city}
            name="city"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="State"
            value={formData.state}
            name="state"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="multi-fields">
          <input
            type="text"
            placeholder="Zip code"
            value={formData.zipCode}
            name="zipCode"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Country"
            value={formData.country}
            name="country"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        </div>
        <input
          type="text"
          placeholder="Phone *"
          value={formData.phoneNumber}
          name="phoneNumber"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />
      </div>

      <div className="place-order-right">
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-3xl font-semibold ">Cart Totals</h2>
          <div>
            <div className="flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="my-2.5 mx-0 border-0 bg-[#555] h-[1px]" />
            <div className="flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className="my-2.5 mx-0 border-0 bg-[#555] h-[1px]" />

            <div className="flex justify-between">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button
            type="submit"
            className={`border-0 text-white bg-orange-400 w-[max(15vw,200px)] py-3 px-0 rounded-sm cursor-pointer mt-7 ${
              loading ? "opacity-65" : ""
            } `}
            disabled={loading}
          >
            {loading ? "Processing payment..." : "Proceed to Payment"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;

import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 py-[20px] px-[8vw] pt-20 mt-25"
      id="contact-us"
    >
      <div className="w-full grid grid-cols-4 gap-20 max-[750px]:flex-col max-[750px]:flex max-lg:gap-9">
        <div className="flex flex-col items-start gap-5 col-span-2">
          <img src={assets.logo} alt="Logo" />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            minima qui, molestias cumque earum ipsa quo quam, quos praesentium
            aut consequuntur, unde debitis obcaecati ullam consequatur sed
            excepturi quisquam! Quasi!
          </p>
          <div className="flex gap-4">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="flex flex-col items-start gap-5">
          <h2 className="text-white font-bold">COMPANY</h2>
          <ul>
            <li className="mb-2.5 cursor-pointer">Home</li>
            <li className="mb-2.5 cursor-pointer">About Us</li>
            <li className="mb-2.5 cursor-pointer">Delivery</li>
            <li className="mb-2.5 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        <div className="flex flex-col items-start gap-5">
          <h2 className="text-white font-bold">GET IN TOUCH</h2>
          <ul>
            <li className="mb-2.5 cursor-pointer">+92 316 212 6865</li>
            <li className="mb-2.5 cursor-pointer">tomato@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr className="h-0.5 w-full my-5 mx-0 bg-gray-400 border-none" />

      <p>Copyright 2025 @ Toamato.com - All Right reserved.</p>
    </div>
  );
};

export default Footer;

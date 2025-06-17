import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div
      className="m-auto mt-25 text-[max(3vw,20px)] text-center font-semibold"
      id="app-download"
    >
      <p>
        For Better Experience Download <br /> Tomato App
      </p>
      <div className="flex justify-center gap-[max(2vw,10px)] mt-10">
        <img
          src={assets.play_store}
          alt=""
          className="w-[max(30vw,120px)] max-w-[180px] transition-all duration-300 cursor-pointer hover:scale-105"
        />
        <img
          src={assets.app_store}
          alt=""
          className="w-[max(30vw,120px)] max-w-[180px] transition-all duration-300 cursor-pointer hover:scale-105"
        />
      </div>
    </div>
  );
};
export default AppDownload;

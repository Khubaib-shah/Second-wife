const Header = () => {
  return (
    <div className="h-[34vw]  max-[1050px]:h-[38vw] my-8 mx-auto bg-[url('/header_img.png')] bg-no-repeat bg-cover relative">
      <div className="absolute max-[1050px]:max-w-[55%] max-[750px]:max-w-[60%] max-[500px]:max-w-[70%] flex flex-col items-start gap-[1.5vw] max-w-1/2 bottom-1/10 left-[6vw] animate-fadeIn">
        <h2
          className="font-medium text-white"
          style={{ fontSize: "clamp(22px, 4.5vw, 50px)" }}
        >
          Order your favourite food here
        </h2>
        <p className="text-white text-[1vw]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          eum quasi veniam placeat fugiat? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Reiciendis eum quasi veniam placeat
          fugiat? coam placeat fugiat?{" "}
        </p>
        <a
          href="#food_display"
          className="border-none gray bg-white rounded-full font-medium py-[1vw] px-[2.3vw]"
        >
          View Menu
        </a>
      </div>
    </div>
  );
};

export default Header;

import NavBar from "./NavBar";

function Header() {
  return (
    <>
      <NavBar />

      <div className="my-[8%]">
        <p className="font-poppins_bold text-white text-center text-2xl sm:text-5xl md:text-7xl 2xl:text-[112px]  leading-10 2xl:leading-[168px]">
          Own your audience.
        </p>
        <p className="font-poppins_bold text_gradient text-center text-2xl sm:text-5xl md:text-7xl 2xl:text-[112px] leading-10 2xl:leading-[168px] sm:mt-[2%]">
          So you don't lose them.
        </p>
      </div>

      <p className="font-poppins_medium text-white text-center sm:text-xl md:text-3xl  2xl:text-[40px] 2xl:leading-[60px] mb-[50px]">
        Turn your audience into email and <br /> text message subscribers.
      </p>

      <div className="flex justify-center items-center gap-4 flex-col sm:flex-row md:gap-6">
        <button className="font-poppins_medium text-white bg-blue h-[40px] w-[200px] md:h-[60px] md:w-[260px] 2xl:h-[77px] 2xl:w-[313px] text-sm md:text-[20px]  leading-[30px] rounded-md">
          Get Started Now
        </button>

        <button
          className={`font-poppins_medium text-dark bg-black h-[40px] w-[200px] md:h-[60px] md:w-[260px] 2xl:h-[77px] 2xl:w-[313px]  text-sm md:text-[20px]  leading-[30px] rounded-md border border-[#707070]`}
        >
          View A Demo
        </button>
      </div>

      <div className="flex justify-center items-center gap-2 md:gap-[22px] mt-[20px]">
        <div className="flex items-center justify-center h-[21px] w-[21px] md:h-[28px] md:w-[28px] bg-darkgreen rounded-full ">
          <div className="h-[10px] w-[10px] md:h-[17px] md:w-[17px] rounded-full bg-green "></div>
        </div>
        <p className="font-poppins_regular text-dark text-center leading-[38px] text-sm md:text-[25px]">
          <span className="text-white">1000+ </span>creators have already
          started{" "}
        </p>
      </div>
    </>
  );
}

export default Header;

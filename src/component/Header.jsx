import NavBar from "./NavBar";

function Header() {
  return (
    <>
      <NavBar />

      <div className="">
        <p className="font-poppins_bold text-white text-center text-[112px]  leading-[168px]">
          Own your audience.
        </p>
        <p className="font-poppins_bold text-center text-[112px] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text leading-[168px]">
          So you don't lose them.
        </p>
      </div>

      {/* <p className="font-poppins_medium text-white text-center text-[40px]">
        Turn your audience into email and <br /> text message subscribers.
      </p> */}

      {/* <div className="flex justify-center gap-6">
        <button className="font-poppins_medium text-white bg-blue h-[77px] w-[313px] text-[20px]  leading-[30px] rounded-md">
          Get Started Now
        </button>

        <button
          className={`font-poppins_medium text-dark bg-black  h-[77px] w-[313px]  text-[20px]  leading-[30px] rounded-md border border-[#707070]`}
        >
          View A Demo
        </button>
      </div> */}

      {/* <div className="flex justify-center items-center gap-[22px]">
        <div className="flex items-center justify-center h-[28px] bg-darkgreen rounded-full w-[28px]">
          <div className="h-[17px] w-[17px] rounded-full bg-green "></div>
        </div>
        <p className="font-poppins_regular text-dark text-center leading-[38px] text-[25px]">
          <span className="text-white">1000+ </span>creators have already
          started{" "}
        </p>
      </div> */}
    </>
  );
}

export default Header;

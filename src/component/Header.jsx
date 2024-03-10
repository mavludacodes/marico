import NavBar from "./NavBar";

function Header() {
  return (
    <>
      <NavBar />

      <div className="">
        <p className="font-poppins_bold text-[#FFFFFF] text-[112px] text-center leading-[168px]">
          Own your audience.
        </p>
        <p className="font-poppins_bold text-center text-[112px] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text leading-[168px]">
          So you don't lose them.
        </p>
      </div>

      <p className="text-[#FFFFFF] font-poppins_medium text-center text-[40px]">
        Turn your audience into email and <br /> text message subscribers.
      </p>
    </>
  );
}

export default Header;

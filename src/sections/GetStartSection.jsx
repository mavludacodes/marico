import React from "react";
import logo from "../assets/Logo.svg";

function GetStartSection() {
  return (
    <>
      <div className="flex flex-col justify-center gap-4">
        <div className="flex justify-center">
          <img src={logo} alt="" />
        </div>
        <p className="font-poppins_bold text-white text-center 2xl:leading-[150px] text-[24px] sm:text-[32px] md:text-[50px] 2xl:text-[100px] ">
          Get Started Now
        </p>
        <p className="font-poppins_regular text-white text-center 2xl:leading-[64px]  text-[22px] sm:text-[28px] md:text-[36px] 2xl:text-[43px]  ">
          Setup is easy and takes under 5 minutes.
        </p>
        <div className="flex justify-center">
          <button className="font-poppins_medium text-white bg-blue  h-[60px] 2-[250px]  md:h-[90px] md:w-[300px]  2xl:h-[102px] 2xl:w-[472px]  text-[30px]  leading-[45px] rounded-md">
            Get Started Now
          </button>
        </div>
        <div className="flex justify-center items-center gap-[22px]">
          <div className="flex items-center justify-center h-[37px] bg-darkgreen rounded-full w-[37px]">
            <div className="h-[14px] w-[14px] 2xl:h-[22px] 2xl:w-[22px] rounded-full bg-green "></div>
          </div>
          <p className="font-poppins_regular text-dark text-center 2xl:leading-[57px] text-[24px] sm:text-[28px]  md:text-[32px] 2xl:text-[38px] ">
            <span className="text-white">1000+ </span>creators have already
            started{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default GetStartSection;

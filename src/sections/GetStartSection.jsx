import React from "react";
import logo from "../assets/Logo.svg";

function GetStartSection() {
  return (
    <>
      <div>
        <div className="flex justify-center">
          <img src={logo} alt="" />
        </div>
        <p className="font-poppins_bold text-[#FFFFFF] leading-[150px] text-[100px] text-center">
          Get Started Now
        </p>
        <p className="font-poppins_regular text-[#FFFFFF] leading-[64px] text-[43px] text-center">
          Setup is easy and takes under 5 minutes.
        </p>
        <div className="flex justify-center items-center gap-[22px]">
          <div className="flex items-center justify-center h-[37px] bg-[#043016] rounded-full w-[37px]">
            <div className="h-[22px] w-[22px] rounded-full bg-[#0FC65C] "></div>
          </div>
          <p className="font-poppins_regular text-[#707070] leading-[57px] text-[38px] text-center">
            <span className="text-[#FFFFFF]">1000+ </span>creators have already
            started{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default GetStartSection;

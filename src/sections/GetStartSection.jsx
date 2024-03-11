import React from "react";
import logo from "../assets/Logo.svg";

function GetStartSection() {
  return (
    <>
      <div>
        <div className="flex justify-center">
          <img src={logo} alt="" />
        </div>
        <p className="font-poppins_bold text-white leading-[150px] text-[100px] text-center">
          Get Started Now
        </p>
        <p className="font-poppins_regular text-white leading-[64px] text-[43px] text-center">
          Setup is easy and takes under 5 minutes.
        </p>
        <div className="flex justify-center">
          <button className="font-poppins_medium text-white bg-[#326CF9] h-[102px] w-[472px]  text-[30px]  leading-[45px] rounded-md">
            Get Started Now
          </button>
        </div>
        <div className="flex justify-center items-center gap-[22px]">
          <div className="flex items-center justify-center h-[37px] bg-[#043016] rounded-full w-[37px]">
            <div className="h-[22px] w-[22px] rounded-full bg-[#0FC65C] "></div>
          </div>
          <p className="font-poppins_regular text-dark leading-[57px] text-[38px] text-center">
            <span className="text-[#FFFFFF]">1000+ </span>creators have already
            started{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default GetStartSection;

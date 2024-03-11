import React from "react";

import mobile_img from "../assets/Mobile.png";
function OneLinkCollectsSection() {
  return (
    <>
      <div>
        <div className="flex justify-center  ">
          <div className="bg-[#0D0D0D] h-[666px] w-[854px]">
            <p className="text-[#0FC65C] font-poppins_regular text-[30px] leading-[45px]">
              One Link
            </p>
            <p className="text-[#919191] font-poppins_semibold text-[80px] text-[120px] ">
              ALL You Create.
            </p>
            <p className="text-[#FFFFFF] font-poppins_semibold text-[80px] text-[120px] ">
              One Link
            </p>

            <img src={mobile_img} alt="" />
          </div>
          <div className="bg-[#0D0D0D] h-[666px] w-[854px]">
            <p className="text-[#0FC65C] font-poppins_regular text-[30px] leading-[45px]">
              Collect Subscribers
            </p>
            <p className="text-[#919191] font-poppins_semibold text-[80px] text-[120px] ">
              Emails
            </p>
            <p className="text-[#919191] font-poppins_semibold text-[80px] text-[120px] ">
              Phone #s
            </p>
            <p className="text-[#FFFFFF] font-poppins_semibold text-[80px] text-[120px] ">
              All Yours.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#326CF9] h-[65px] w-[207px] text-[#FFFFFF] text-[20px] font-poppins_medium leading-[30px] rounded-md">
            Get Started Now
          </button>
        </div>
      </div>
    </>
  );
}

export default OneLinkCollectsSection;

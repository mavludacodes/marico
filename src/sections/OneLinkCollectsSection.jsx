import React from "react";

import mobile_img from "../assets/Mobile.png";
function OneLinkCollectsSection() {
  return (
    <>
      <div>
        <div className="flex justify-center  ">
          <div className="bg-lightblack h-[666px] w-[854px]">
            <p className="font-poppins_regular text-green text-[30px] leading-[45px]">
              One Link
            </p>
            <p className="font-poppins_semibold text-gray text-[80px] text-[120px] ">
              ALL You Create.
            </p>
            <p className="font-poppins_semibold text-white text-[80px] text-[120px] ">
              One Link
            </p>

            <img src={mobile_img} alt="" />
          </div>
          <div className="bg-lightblack h-[666px] w-[854px]">
            <p className="font-poppins_regular text-green text-[30px] leading-[45px]">
              Collect Subscribers
            </p>
            <p className="font-poppins_semibold text-gray text-[80px] text-[120px] ">
              Emails
            </p>
            <p className="font-poppins_semibold text-gray text-[80px] text-[120px] ">
              Phone #s
            </p>
            <p className="font-poppins_semibold text-white text-[80px] text-[120px] ">
              All Yours.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="font-poppins_medium text-white  bg-blue h-[65px] w-[207px]  text-[20px] leading-[30px] rounded-md">
            Get Started Now
          </button>
        </div>
      </div>
    </>
  );
}

export default OneLinkCollectsSection;

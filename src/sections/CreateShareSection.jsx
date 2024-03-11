import React from "react";

import screen_img from "../assets/Image.png";

function CreateShareSection() {
  return (
    <>
      <div className="flex">
        <div>
          <p className="text-[#FFFFFF] font-poppins_medium text-[30px] leading-[45px]">
            Create & Share
          </p>
          <p className="text-[#FFFFFF] text-[75px] font-poppins_semibold leading-[112px]">
            Reach Your
          </p>
          <p className="text-[#FFFFFF] text-[75px] font-poppins_semibold leading-[112px]">
            Audience <span className="text-[#3C82F4]">Directly.</span>
          </p>
          <ul>
            <li className="text-[#FFFFFF] font-poppins_regular text-[23px] leading-[34px] flex gap-[11px]">
              <div className="rounded-full h-[33px] w-[33px] bg-[#2D2D2D] text-center">
                1
              </div>{" "}
              Embed content or create something new to share.
            </li>
            <li className="text-[#FFFFFF] font-poppins_regular text-[23px] leading-[34px] flex gap-[11px]">
              <div className="rounded-full  h-[33px] w-[33px]  bg-[#2D2D2D] text-center">
                2
              </div>{" "}
              Share content over email, text message or your homepage.
            </li>
          </ul>

          <div className="flex justify-center gap-6">
            <button className="bg-[#326CF9] h-[65px] w-[207px] text-[#FFFFFF] text-[20px] font-poppins_medium leading-[30px] rounded-md">
              Get Started Now
            </button>

            <button
              className={`bg-[#000000]  h-[65px] w-[207px] text-[#707070] text-[20px] font-poppins_medium leading-[30px] rounded-md border border-[#707070]`}
            >
              View A Demo
            </button>
          </div>
        </div>

        <div>
          <img src={screen_img} alt="" />
        </div>
      </div>
    </>
  );
}

export default CreateShareSection;

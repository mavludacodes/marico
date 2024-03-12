import React from "react";

import screen_img from "../assets/Image.png";

function CreateShareSection() {
  return (
    <>
      <div className="flex flex-col md:flex-row mt-[182px] ml-[5%] gap-6 md:gap-4 ">
        <div className="flex flex-col justify-between">
          <p className="font-poppins_medium text-white text-[18px]  sm:text-[24px] md-text-[28px]  2xl:text-[30px] leading-[45px]">
            Create & Share
          </p>
          <div>
            <p className="font-poppins_semibold text-white text-[28px] sm:text-[32px] md:text-[50px] 2xl:text-[75px]  2xl:leading-[112px]">
              Reach Your
            </p>
            <p className="font-poppins_semibold text-white text-[28px] sm:text-[32px] md:text-[50px] 2xl:text-[75px] 2xl:leading-[112px]">
              Audience <span className="text-blue">Directly.</span>
            </p>
          </div>
          <ul>
            <li className="font-poppins_regular text-white text-[16px] md:text-[18px] 2xl:text-[23px] leading-[34px] flex gap-[11px]">
              <div className="rounded-full h-[33px] w-[33px] bg-shark text-center">
                1
              </div>{" "}
              Embed content or create something new to share.
            </li>
            <li className="font-poppins_regular text-white text-[16px] md:text-[18px] 2xl:text-[23px] leading-[34px] flex gap-[11px]">
              <div className="rounded-full  h-[33px] w-[33px]  bg-shark text-center">
                2
              </div>{" "}
              Share content over email, text message or your homepage.
            </li>
          </ul>

          <div className="flex justify-center gap-6">
            <button className="font-poppins_medium text-white bg-blue h-[40px] w-[120px] md:h-[50px] md:w-[160px]  2xl:h-[65px] 2xl:w-[207px] text-[14px] md:text-[18px]  2xl:text-[20px]  2xl:leading-[30px] rounded-md">
              Get Started Now
            </button>

            <button
              className={`font-poppins_medium text-dark bg-black h-[40px] w-[120px] md:h-[50px] md:w-[160px]  2xl:h-[65px] 2xl:w-[207px] md:text-[18px]   text-[14px] 2xl:text-[20px]  2xl:leading-[30px] rounded-md border border-[#707070]`}
            >
              View A Demo
            </button>
          </div>
        </div>

        <div>
          <img src={screen_img} alt="screen_img" />
        </div>
      </div>
    </>
  );
}

export default CreateShareSection;

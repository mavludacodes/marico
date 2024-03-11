import React from "react";
import screen_img from "../assets/Screen.png";

function YourHomepageSection() {
  return (
    <>
      <div className="flex">
        <div>
          <p className="text-[#FFFFFF] font-poppins_medium text-[30px] leading-[45px]">
            Your Homepage
          </p>
          <p className="text-[#FFFFFF] text-[75px] font-poppins_semibold leading-[112px]">
            Your Content.
          </p>
          <p className="text-[#FFFFFF] text-[75px] font-poppins_semibold leading-[112px]">
            All in <span className="text-[#3C82F4]">One Spot</span>
          </p>
          <ul>
            <li className="text-[#FFFFFF] font-poppins_regular text-[23px] leading-[34px] flex gap-[11px]">
              <div className="rounded-full h-[33px] w-[33px] bg-[#2D2D2D] text-center">
                1
              </div>{" "}
              Bring all of your content together into one homepage.
            </li>
            <li className="text-[#FFFFFF] font-poppins_regular text-[23px] leading-[34px] flex gap-[11px]">
              <div className="rounded-full  h-[33px] w-[33px]  bg-[#2D2D2D] text-center">
                2
              </div>{" "}
              Your page automatically updates whenever you create.
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

export default YourHomepageSection;

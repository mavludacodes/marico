import React from "react";
import screen_img from "../assets/Screen.png";

function YourHomepageSection() {
  return (
    <>
      <div className="flex">
        <div>
          <p className="font-poppins_medium text-white text-[30px] leading-[45px]">
            Your Homepage
          </p>
          <p className="font-poppins_semibold text-white text-[75px]  leading-[112px]">
            Your Content.
          </p>
          <p className="font-poppins_semibold text-white text-[75px]  leading-[112px]">
            All in <span className="text-blue">One Spot</span>
          </p>
          <ul>
            <li className="font-poppins_regular text-white text-[23px] leading-[34px] flex gap-[11px]">
              <div className="rounded-full h-[33px] w-[33px] bg-shark text-center">
                1
              </div>{" "}
              Bring all of your content together into one homepage.
            </li>
            <li className="font-poppins_regular text-white text-[23px] leading-[34px] flex gap-[11px]">
              <div className="rounded-full  h-[33px] w-[33px]  bg-shark text-center">
                2
              </div>{" "}
              Your page automatically updates whenever you create.
            </li>
          </ul>

          <div className="flex justify-center gap-6">
            <button className="font-poppins_medium text-white bg-blue h-[65px] w-[207px]  text-[20px]  leading-[30px] rounded-md">
              Get Started Now
            </button>

            <button
              className={`font-poppins_medium text-dark bg-black  h-[65px] w-[207px]  text-[20px]  leading-[30px] rounded-md border border-[#707070]`}
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

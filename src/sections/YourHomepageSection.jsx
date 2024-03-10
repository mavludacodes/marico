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
            <li className="text-[#FFFFFF] font-poppins_regular text-[23px] leading-[34px]">
              Bring all of your content together into one homepage.
            </li>
            <li className="text-[#FFFFFF] font-poppins_regular text-[23px] leading-[34px]">
              Your page automatically updates whenever you create.
            </li>
          </ul>
        </div>

        <div>
          <button />
          <button />
        </div>

        <div>
          <img src={screen_img} alt="" />
        </div>
      </div>
    </>
  );
}

export default YourHomepageSection;

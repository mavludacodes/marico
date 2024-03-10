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
            <li className="text-[#FFFFFF] font-poppins_regular text-[23px] leading-[34px]">
              Embed content or create something new to share.
            </li>
            <li className="text-[#FFFFFF] font-poppins_regular text-[23px] leading-[34px]">
              Share content over email, text message or your homepage.
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

export default CreateShareSection;

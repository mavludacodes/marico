import React from "react";

import bg_img from "../assets/expert.png";

function AudienceSection() {
  return (
    <>
      <div
        className="bg-local h-[799px] flex items-center"
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        <p className="font-poppins_semibold text-[70px] text-[#FFFFFF] leading-[105px]">
          We've helped over 1,000 creatorsre <br /> claim control of their
          audience.
        </p>
      </div>
    </>
  );
}

export default AudienceSection;

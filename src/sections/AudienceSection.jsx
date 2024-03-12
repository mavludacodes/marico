import React from "react";

import bg_img from "../assets/expert.png";

function AudienceSection() {
  return (
    <>
      <div
        className="bg-local h-[799px] flex items-center justify-center"
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        <p className="font-poppins_semibold text-white  text-center text-[24px] sm:text-[32px] md:text-[50px] 2xl:text-[70px] 2xl:leading-[105px]">
          We've helped over 1,000 creatorsre <br /> claim control of their
          audience.
        </p>
      </div>
    </>
  );
}

export default AudienceSection;

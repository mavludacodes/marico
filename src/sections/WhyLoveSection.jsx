import React from "react";
import smile_emoji from "../assets/emoji/Smile_emoji.svg";
import happy_emoji from "../assets/emoji/Happy_emoji.svg";
import party_emoji from "../assets/emoji/Party_emoji.svg";

function WhyLoveSection() {
  return (
    <>
      <p className="font-poppins_semibold text-white text-center text-[28px] sm:text-[32px] md:text-[50px] 2xl:text-[75px] mt-[130px] 2xl:mt-[188px] mb-10">
        Why Creators Love Marico
      </p>
      <div className="flex justify-center flex-col md:flex-row gap-6 ">
        <div>
          <div className="flex gap-[8px] justify-center ">
            <img
              src={smile_emoji}
              alt=""
              className="w-[18px] md:w-[24px] lg:w-auto"
            />
            <p className="font-poppins_semibold text-white text-[18px] md:text-[22px] lg:text-[35px] ">
              <span></span>Reduced Anxiety
            </p>
          </div>
          <p className="font-poppins_regular text-dark text-center text-[16px] sm:text-[22px] ">
            Never worry about losing your audience.
          </p>
        </div>
        <div>
          <div className="flex gap-[8px] justify-center">
            <img
              src={happy_emoji}
              alt=""
              className="w-[18px] md:w-[24px] lg:w-auto"
            />
            <p className="font-poppins_semibold text-white text-[18px] md:text-[22px]  lg:text-[35px]">
              <span></span>Lower Workload
            </p>
          </div>
          <p className="font-poppins_regular text-dark text-center text-[16px] sm:text-[22px] ">
            Just share one link. We'll handle the rest.
          </p>
        </div>
        <div>
          <div className="flex gap-[8px] justify-center">
            <img
              src={party_emoji}
              alt=""
              className="w-[18px] md:w-[24px] lg:w-auto"
            />
            <p className="font-poppins_semibold text-white text-[18px] md:text-[22px]  lg:text-[35px]">
              <span></span>More Time
            </p>
          </div>
          <p className="font-poppins_regular text-dark text-center text-[16px] sm:text-[22px]">
            Spend less time on marketing tools
          </p>
        </div>
      </div>
    </>
  );
}

export default WhyLoveSection;

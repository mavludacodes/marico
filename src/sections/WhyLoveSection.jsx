import React from "react";
import smile_emoji from "../assets/emoji/Smile_emoji.svg";
import happy_emoji from "../assets/emoji/Happy_emoji.svg";
import party_emoji from "../assets/emoji/Party_emoji.svg";

function WhyLoveSection() {
  return (
    <>
      <p className="font-poppins_semibold text-white text-center text-[75px]">
        Why Creators Love Marico
      </p>
      <div className="flex justify-center">
        <div>
          <div className="flex gap-[8px]">
            <img src={smile_emoji} alt="" />
            <p className="font-poppins_semibold text-white text-[35px] ">
              <span></span>Reduced Anxiety
            </p>
          </div>
          <p className="font-poppins_regular text-dark text-[22px] ">
            Never worry about losing your audience.
          </p>
        </div>
        <div>
          <div className="flex gap-[8px]">
            <img src={happy_emoji} alt="" />
            <p className="font-poppins_semibold text-white text-[35px] ">
              <span></span>Lower Workload
            </p>
          </div>
          <p className="font-poppins_regular text-dark text-[22px] ">
            Just share one link. We'll handle the rest.
          </p>
        </div>
        <div>
          <div className="flex gap-[8px]">
            <img src={party_emoji} alt="" />
            <p className="font-poppins_semibold text-white text-[35px]">
              <span></span>More Time
            </p>
          </div>
          <p className="font-poppins_regular text-dark text-[22px]">
            Spend less time on marketing tools
          </p>
        </div>
      </div>
    </>
  );
}

export default WhyLoveSection;

import React from "react";

function WhyLoveSection() {
  return (
    <>
      <p className="text-[#FFFFFF] font-poppins_semibold text-center text-[75px]">
        Why Creators Love Marico
      </p>
      <div className="flex justify-center">
        <div>
          <p className="text-[#FFFFFF] text-[35px] font-poppins_semibold">
            <span></span>Reduced Anxiety
          </p>
          <p className="text-[#707070] text-[22px] font-poppins_regular">
            Never worry about losing your audience.
          </p>
        </div>
        <div>
          <p className="text-[#FFFFFF] text-[35px] font-poppins_semibold">
            <span></span>Lower Workload
          </p>
          <p className="text-[#707070] text-[22px] font-poppins_regular">
            Just share one link. We'll handle the rest.
          </p>
        </div>
        <div>
          <p className="text-[#FFFFFF] text-[35px] font-poppins_semibold">
            <span></span>More Time
          </p>
          <p className="text-[#707070] text-[22px] font-poppins_regular">
            Spend less time on marketing tools
          </p>
        </div>
      </div>
    </>
  );
}

export default WhyLoveSection;

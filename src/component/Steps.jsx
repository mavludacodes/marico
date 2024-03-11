import React from "react";

function Steps({ step, title, text }) {
  return (
    <>
      <p className="font-poppins_semibold text-center text-[#3D82F2] uppercase leading-[38px]">
        {step}
      </p>
      <p className="font-poppins_semibold text-[75px] text-[#FFFFFF] text-center leading-[112px]">
        {title}
      </p>
      <p className="font-poppins_regular text-[#707070] text-[30px] text-center">
        {text}
      </p>
      <div className="flex justify-center">
        <button
          className={`bg-[#000000]  h-[77px] w-[313px] text-[#707070] text-[20px] font-poppins_medium leading-[30px] rounded-md border border-[#707070]`}
        >
          View Avaliable Sources
        </button>
      </div>
    </>
  );
}

export default Steps;

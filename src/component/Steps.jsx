import React from "react";

function Steps({ step, title, text }) {
  return (
    <>
      <div className="mt-[162px]">
        <p className="font-poppins_semibold text-blue text-center text-[25px] uppercase leading-[38px]">
          {step}
        </p>
        <p className="font-poppins_semibold  text-white  text-center text-[28px] sm:text-[32px] md:text-[50px] 2xl:text-[75px]  2xl:leading-[112px]">
          {title}
        </p>
        <p className="font-poppins_regular text-dark text-center text-[16px] sm:text-[18px] md:text-[25px] 2xl:text-[30px] mx-[15%] mb-6">
          {text}
        </p>
        <div className="flex justify-center">
          <button
            className={`font-poppins_medium text-dark bg-black h-[40px] w-[200px] md:h-[60px] md:w-[260px] 2xl:h-[77px] 2xl:w-[313px] text-sm md:text-[20px] leading-[30px] rounded-md border border-dark`}
          >
            View Avaliable Sources
          </button>
        </div>
      </div>
    </>
  );
}

export default Steps;

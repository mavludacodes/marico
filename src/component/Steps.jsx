import React from "react";

function Steps({ step, title, text }) {
  return (
    <>
      <p className="font-poppins_semibold text-blue text-center  uppercase leading-[38px]">
        {step}
      </p>
      <p className="font-poppins_semibold  text-white  text-center text-[75px] leading-[112px]">
        {title}
      </p>
      <p className="font-poppins_regular text-dark text-center text-[30px] ">
        {text}
      </p>
      <div className="flex justify-center">
        <button
          className={`font-poppins_medium text-dark bg-black  h-[77px] w-[313px]  text-[20px]  leading-[30px] rounded-md border border-dark`}
        >
          View Avaliable Sources
        </button>
      </div>
    </>
  );
}

export default Steps;

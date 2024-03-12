import React from "react";
import chat_img from "../assets/chat.png";

function ExpertsAgreeSection() {
  return (
    <>
      <div className="mb-[188px]">
        <p className="font-poppins_semibold text-white text-center text-[28px] sm:text-[32px] md:text-[50px] 2xl:text-[75px] 2xl:leading-[112px] mt-[130px] mb-[52px] ">
          Experts Agree
        </p>
        <img src={chat_img} alt="" />
      </div>
    </>
  );
}

export default ExpertsAgreeSection;

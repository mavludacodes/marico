import React from "react";
import chat_img from "../assets/chat.png";

function ExpertsAgreeSection() {
  return (
    <>
      <p className=" text-center text-[#FFFFFF] text-[75px] leading-[112px] font-poppins_semibold">
        Experts Agree
      </p>
      <img src={chat_img} alt="" />
    </>
  );
}

export default ExpertsAgreeSection;
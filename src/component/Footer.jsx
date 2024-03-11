import React from "react";
import logo from "../assets/Company_logo.svg";

function Footer() {
  return (
    <>
      <div className="flex justify-between mx-[140px] my-[96px] items-center">
        <div>
          <img src={logo} alt="" />
          <a
            href=""
            className="font-poppins_regular text-dark text-[27px] leading-[40px]"
          >
            info@marico.co
          </a>
        </div>
        <div>
          <ul className="font-poppins_medium text-dark flex gap-[46px]  text-[28px] leading-[42px]">
            <li>About</li>
            <li className="text-blue">Pricing</li>
            <li>Blog</li>
            <li>Sign in</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;

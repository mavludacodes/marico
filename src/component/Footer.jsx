import React from "react";
import logo from "../assets/Company_logo.svg";

function Footer() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between mx-[140px] my-[96px] items-center gap-4 md:gap-auto">
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
          <ul className="font-poppins_medium text-dark flex  flex-col md:flex-row gap-[46px] text-[18px] md:text-[22px]  2xl:text-[28px] 2xsl:leading-[42px]">
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

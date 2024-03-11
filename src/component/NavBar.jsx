// src/components/NavBar.jsx
import React from "react";

import logo from "../assets/Company_logo.svg"; // Adjust the path to where your logo is stored
import arrordown from "../assets/arrow-down.svg";

const NavBar = () => {
  return (
    <nav className="flex justify-between pt-[46px] items-center mx-[5%]">
      <a href="/">
        <img src={logo} alt="Logo" width="196px" height="56px" />
      </a>
      <div className="flex gap-[49px]">
        <a
          href="/"
          className="font-poppins_medium text-dark text-[20px] leading-[30px] "
        >
          Use Cases
          <span className="ml-2">
            <img src={arrordown} alt="Logo" className="inline" />
          </span>
        </a>
        <a
          href="/about"
          className="font-poppins_medium text-dark  text-[20px] leading-[30px]"
        >
          About
        </a>
        <a
          href="/pricing"
          className="font-poppins_medium text-blue text-[20px] leading-[30px]"
        >
          Pricing
        </a>
        <a
          href="/blog"
          className="font-poppins_medium  text-dark  text-[20px] leading-[30px]"
        >
          Blog
        </a>
      </div>
      <div className="">
        <a
          href="/signin"
          className="font-poppins_medium text-dark text-[20px] leading-[30px] px-[20px] py-[13px] "
        >
          Login
        </a>
        <a
          href="/login"
          className="font-poppins_medium text-white  text-[20px] leading-[30px] bg-[#306EF7] px-[20px] py-[13px] rounded-md "
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

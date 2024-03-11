// src/components/NavBar.jsx
import React, { useState } from "react";

import logo from "../assets/Company_logo.svg"; // Adjust the path to where your logo is stored
import arrordown from "../assets/arrow-down.svg";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="mx-[5%]  pt-[46px]">
      <div className="hidden md:flex justify-between items-center">
        <a href="/">
          <img
            src={logo}
            alt="Logo"
            className="w-[120px] h-[50px]  lg:w-[196px] lg:h-[56px]"
          />
        </a>
        <div className="flex md:gap-[20px] lg:gap-[49px]">
          <a
            href="/"
            className="font-poppins_medium text-dark md:text-[16px] lg:text-[20px] leading-[30px] "
          >
            Use Cases
            <span className="md:ml-1 lg:ml-2">
              <img src={arrordown} alt="Logo" className="inline" />
            </span>
          </a>
          <a
            href="/about"
            className="font-poppins_medium text-dark  md:text-[16px] lg:text-[20px] leading-[30px]"
          >
            About
          </a>
          <a
            href="/pricing"
            className="font-poppins_medium text-blue md:text-[16px] lg:text-[20px] leading-[30px]"
          >
            Pricing
          </a>
          <a
            href="/blog"
            className="font-poppins_medium  text-dark md:text-[16px]  lg:text-[20px] leading-[30px]"
          >
            Blog
          </a>
        </div>
        <div className="">
          <a
            href="/signin"
            className="font-poppins_medium text-dark md:text-[16px] lg:text-[20px] leading-[30px] px-[20px] py-[13px] "
          >
            Login
          </a>
          <a
            href="/login"
            className="font-poppins_medium text-white bg-blue md:text-[16px]  lg:text-[20px] leading-[30px]  px-[20px] py-[13px] rounded-md "
          >
            Sign Up
          </a>
        </div>
      </div>

      {!open && (
        <div className="flex justify-between items-center md:hidden">
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              className="w-[120px] h-[50px]  lg:w-[196px] lg:h-[56px]"
            />
          </a>
          <button className="text-white pointer" onClick={() => setOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      )}
      {open && (
        <div className="flex md:hidden fixed  z-10 top-0 left-0 w-full h-screen bg-black">
          <div className="absolute flex  justify-between items-center w-full px-[5%] pt-[46px]">
            <a href="/">
              <img
                src={logo}
                alt="Logo"
                className="w-[120px] h-[50px]  lg:w-[196px] lg:h-[56px]"
              />
            </a>
            <button
              className="text-white pointer"
              onClick={() => setOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="absolute flex flex-col items-center justify-center w-full mt-[40%]">
            <div className="flex flex-col justify-center items-center gap-[15px]">
              <a
                href="#"
                className="font-poppins_medium text-dark text-[20px]  leading-[30px] "
              >
                Use Cases
                <span className="ml-2">
                  <img src={arrordown} alt="Logo" className="inline" />
                </span>
              </a>
              <a
                href="#"
                className="font-poppins_medium text-dark text-[20px]  leading-[30px]"
              >
                About
              </a>
              <a
                href="#"
                className="font-poppins_medium text-blue text-[20px] leading-[30px]"
              >
                Pricing
              </a>
              <a
                href="#"
                className="font-poppins_medium  text-dark text-[20px] leading-[30px]"
              >
                Blog
              </a>
            </div>
            <div className="mt-8">
              <a
                href="/signin"
                className="font-poppins_medium text-dark text-[20px] leading-[30px] px-[20px] py-[13px] "
              >
                Login
              </a>
              <a
                href="/login"
                className="font-poppins_medium text-white bg-blue text-[20px] leading-[30px]  px-[20px] py-[13px] rounded-md "
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

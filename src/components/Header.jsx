import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-6 lg-px-20">
      {/* Left side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 px-10 m-auto md:py-[10px]">
        <p className=" text-white text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold text-left">
          Book Apointment <br />
          With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row font-light items-center gap-3 text-white text-sm">
          <img className="w-28" src={assets.group_profiles} alt="" />
          <p className="text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br className="hidden sm:block" />
            Perspiciatis repellat atque obcaecati{" "}
          </p>
        </div>
        <a className="flex items-center bg-white gap-2 px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300" href="#speciality">
          Book appointments <img className="w-3" src={assets.arrow_icon} alt="" />
        </a>
      </div>
      {/* Right side */}
      <div className="md:w-1/2 relative">
        <img src={assets.header_img} className="w-full md-absolute bottom-0 h-auto rounded-lg " alt="" />
      </div>
    </div>
  );
};

export default Header;

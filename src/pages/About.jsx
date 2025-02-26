import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img className="w-full md:max-w-[360px]" src={assets.about_image} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 text-left">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
            perferendis esse quisquam aliquid ab nesciunt iure ducimus ipsum
            quasi quaerat natus repellendus at voluptates vero inventore,
            veritatis laudantium maxime error?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            vel nostrum eligendi iste ex provident veritatis, totam dolores, in
            ipsa odit. Veritatis consequatur corporis facere harum in odit eum
            asperiores!
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            magni dolor eius repudiandae nobis vel aut, cum animi non
            praesentium dolorum dolore eaque sapiente ullam repellat obcaecati
            consequatur? Assumenda, aliquam.
          </p>
        </div>
      </div>

      <div className="text-xl my-4 text-left">
        <p>
          WHY <span className="font-semibold text-gray-700">CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20 text-left">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>EFFICIENCY:</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>CONVENIENCE:</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>PERSONALIZATION:</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default About;

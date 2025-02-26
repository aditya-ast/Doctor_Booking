import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div
      className="flex flex-col items-center gap-4 py-16 text-gray-800"
      id="speciality"
    >
      <h2 className="text-3xl font-medium">Find By Speciality</h2>
      <p className="w-1/3 text-center text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid neque
        illum
      </p>
      {/* Yha pe scrollTo ek js ka function hai jo scroll kr deta hai page ko top pe agar apan alag pai pe gaye fir
        main page pe wapas aye toh main page top pe chala jayega  */}
      <div
        onClick={() => scrollTo(0, 0)}
        className="flex sm:justify-center gap-4 w-full pt-5 overflow-scroll overflow-y-hidden md:overflow-x-hidden lg:overflow-x-hidden"
      >
        {specialityData.map((item, index) => (
          <Link
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
            key={index}
            to={`/doctors/${item.speciality}`}
          >
            <img className="w-16 sm:w-24 mb-2" src={item.image} alt="" />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;

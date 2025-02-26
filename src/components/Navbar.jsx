import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const[showMenu, setShowMenu] = useState(false);

  const[token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img onClick={() => navigate('/')} className="w-44 cursor-pointer" src={assets.logo} alt="" />
      <ul className=" hidden md:flex items-start gap-5 font-medium">
        <NavLink to='/'>
        {/* to active the underline when the link is active -> go to index.css */}
          <li className="py-1 ">Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          {/*here the bg-primary is a custom class that I have created in the tailwindcss file(tailwind.config.js) */}
        </NavLink>
        <NavLink to='/about'>
          <li className="py-1 ">About</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to='/doctors'>
          <li className="py-1 ">Doctor</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to='/contact'>
          <li className="py-1 ">Contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {
          token 
          ? <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt=""/>
            <img className="w-2.5 " src={assets.dropdown_icon} alt="" />
            <div className={`absolute top-10 right-0 bg-white p-4 rounded-lg shadow-lg hidden group-hover:block`}>
              <div className="min-w-48 rounded flex flex-col gap-4 p-4">
                <p onClick={()=> Navigate('/my-profile')} className="hover:text-primary cursor-pointer">My Profile</p>
                <p onClick={()=> Navigate('/my-appointments')} className="hover:text-primary cursor-pointer">My Appointments</p>
                <p onClick={()=> setToken(false)} className="hover:text-primary cursor-pointer">Logout</p>
              </div>
            </div>
          </div>
          : <button onClick={()=>navigate('/login')} type="button" className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block hover:bg-black hover:border-black">Create Account</button>
        }
        
      </div>
    </div>
  );
};

export default Navbar;

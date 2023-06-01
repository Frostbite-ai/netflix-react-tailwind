import React from "react";
import Dropdown from "./Dropdown.jsx";

const Navbar = () => {
  return (
    <div className=" absolute z-10 flex w-full items-center justify-between p-4">
      <h1 className="cursor-pointer text-4xl font-black text-red-600">
        NETFLIX
      </h1>
      <div className=" flex gap-1">
        <Dropdown />
        <button className=" h-8 cursor-pointer rounded 	px-5 text-sm font-black	  text-white">
          Sign In
        </button>

        <div></div>
        <button className="h-8 cursor-pointer rounded bg-red-700 px-5    	 text-sm font-black	  text-white ">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;

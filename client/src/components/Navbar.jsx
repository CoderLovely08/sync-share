import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="w-full shadow-xl rounded-b-md h-12 flex justify-between bg-white">
      <div className="flex items-center p-4 ">
        <Link to={"/"}>
          <span className="font-bold text-2xl text-white bg-yellow-500 rounded-md px-2 py-1 max-md:text-lg">Sync Share</span>
        </Link>
      </div>
      <div className="text-white font-bold flex items-center justify-center max-md:text-sm">
        <Button label={"New Chat +"} />
      </div>
    </nav>
  );
};

export default Navbar;

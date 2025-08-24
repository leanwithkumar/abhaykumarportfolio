import React from "react";
import { Link } from "react-router-dom";

function Headerslider() {
  return (
    <header className="w-full p-1 shadow-md">
      <nav className="flex justify-between items-center space-x-4">
        
        <Link to="/">
          <div className="flex items-center bg-[#1E1E1E] p-3 rounded-xl hover:bg-[#525252] transition duration-300">
            <img
              src="/icons/latesthome.svg"
              alt="home"
              className="h-6 w-6"
            />
          </div>
        </Link>

        {/* Dashboard */}
        <Link to="/dashboard">
          <div className="flex items-center bg-[#1E1E1E] p-3 rounded-xl hover:bg-[#525252] transition duration-300">
            <img
              src="/icons/newdash.svg"
              alt="dashboard"
              className="h-6 w-6"
            />
          </div>
        </Link>

        {/* Projects */}
        <Link to="/projects">
          <div className="flex items-center bg-[#1E1E1E] p-3 rounded-xl hover:bg-[#525252] transition duration-300">
            <img
              src="/icons/newcart.svg"
              alt="projects"
              className="h-6 w-6"
            />
          </div>
        </Link>

        {/* Blogs */}
        <Link to="/blogs">
          <div className="flex items-center bg-[#1E1E1E] p-3 rounded-xl hover:bg-[#525252] transition duration-300">
            <img
              src="/icons/newblog.svg"
              alt="blogs"
              className="h-6 w-6"
            />
          </div>
        </Link>

        {/* About */}
        <Link to="/about">
          <div className="flex items-center bg-[#1E1E1E] p-3 rounded-xl hover:bg-[#525252] transition duration-300">
            <img
              src="/icons/newabout.svg"
              alt="about"
              className="h-6 w-6"
            />
          </div>
        </Link>

        {/* Contacts */}
        <Link to="/contacts">
          <div className="flex items-center bg-[#1E1E1E] p-3 rounded-xl hover:bg-[#525252] transition duration-300">
            <img
              src="/icons/newcontacts.svg"
              alt="contacts"
              className="h-6 w-6"
            />
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default Headerslider;

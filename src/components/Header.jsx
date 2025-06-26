import React from "react";

const Header = () => {
  return (
    <div className="grid grid-flow-col p-5 shadow-lg items-center">
      {/* Left Section */}
      <div className="flex col-span-1 items-center gap-2">
        <img
          className="h-8"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=512"
        />
        <img
          className="h-8"
          alt="youtube-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI2E5Huc3ioxoXvRVn1phb8yWyk9jOjOWI8Q&s"
        />
      </div>

      {/* Center Section */}
      <div className="col-span-10 flex justify-center items-center">
        <input
          className="w-1/2 border border-gray-400 p-2 px-4 rounded-l-full outline-none"
          placeholder="Search"
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>

      {/* Right Section */}
      <div className="col-span-1 flex justify-end items-center">
        <img
          className="h-8"
          alt="user"
          src="https://icons.veryicon.com/png/o/business/multi-color-financial-and-business-icons/user-139.png"
        />
      </div>
    </div>
  );
};

export default Header;

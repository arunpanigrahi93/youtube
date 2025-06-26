import React from "react";

const Header = () => {
  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
      {/* session 1 */}
      <div className="flex col-span-1 ">
        <img
          className="h-8 mx-2"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=512"
        />
        <img
          className="h-8"
          alt="youtube-logo"
          src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo.png"
        />
      </div>
      {/* session 2 */}
      <div className="col-span-10 text-center">
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          Search
        </button>
      </div>
      {/* session 3 */}
      <div className="col-span-1 flex justify-end">
        <img
          className="h-8 "
          alt="user"
          src="https://icons.veryicon.com/png/o/business/multi-color-financial-and-business-icons/user-139.png"
        />
      </div>
    </div>
  );
};

export default Header;

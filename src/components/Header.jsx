import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
const Header = () => {
  const [searchQuary, setSearchQuary] = useState("");
  const [suggestions, setSuggetstions] = useState([]);
  const [showSuggestions, setShowSuggetions] = useState(false);

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  const searchApi = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuary);
    const response = await data.json();
    console.log(response);
    setSuggetstions(response[1]);
  };

  useEffect(() => {
    const timer = setTimeout(() => searchApi(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuary]);

  return (
    <div className="grid grid-flow-col items-center p-3 shadow-md">
      {/* Left Section */}
      <div className="flex items-center col-span-2 gap-4">
        <img
          onClick={handleToggle}
          className="h-6 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png"
          alt="menu"
        />
        <img
          className="h-6"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="YouTube Logo"
        />
      </div>
      {/* Center Section */}
      <div className="col-span-8 flex justify-center items-center gap-2 relative">
        <div className="flex w-1/2 flex-col relative">
          {/* Input + Search Button */}
          <div className="flex">
            <input
              type="text"
              className="flex-grow p-2 px-4 border border-gray-400 rounded-l-full outline-none w-full"
              placeholder="Search"
              onChange={(e) => setSearchQuary(e.target.value)}
              value={searchQuary}
              onFocus={() => setShowSuggetions(true)}
              onBlur={() => setShowSuggetions(false)}
            />
            <button className="px-4 bg-gray-100 border border-gray-400 rounded-r-full">
              🔍
            </button>
          </div>

          {/* Suggestions Dropdown */}
          {showSuggestions && (
            <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 mt-1 rounded-lg shadow-lg z-50">
              {suggestions.map((s) => (
                <li
                  key="{s}"
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {s}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button className="p-2 rounded-full hover:bg-gray-100">🎤</button>
      </div>

      {/* Right Section */}
      <div className="col-span-2 flex justify-end items-center gap-4">
        <img
          className="h-6 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
          alt="apps"
        />
        <img
          className="h-6 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/1827/1827392.png"
          alt="notifications"
        />
        <img
          className="h-8 rounded-full"
          src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;

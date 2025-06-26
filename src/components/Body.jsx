import React from "react";
import MainContainer from "./MainContainer";
import Sidebar from "./sidebar";
import VideoContainer from "./VideoContainer";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;

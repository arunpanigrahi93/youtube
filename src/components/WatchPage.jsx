import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex">
        <div>
          <iframe
            width="1000"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-9">
          <CommentsContainer />
        </div>
        <div className="col-span-3">{/* Right section content here */}</div>
      </div>
    </div>
  );
};

export default WatchPage;

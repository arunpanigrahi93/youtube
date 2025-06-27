import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const resonse = await data.json();
      // console.log(resonse.items);
      setVideos(resonse.items);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap">
      {videos.map((item) => (
        <VideoCard info={item} key={item.id} />
      ))}
    </div>
  );
};

export default VideoContainer;

import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

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
        <Link to={"/watch?v=" + item.id}>
          <VideoCard info={item} key={item.id} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;

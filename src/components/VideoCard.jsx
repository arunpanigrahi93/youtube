import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  // Optional JS limit to 320 characters (if needed)
  const trimmedTitle = title.length > 320 ? title.slice(0, 320) + "..." : title;

  return (
    <div className="w-72 m-2">
      <img
        alt="thumbnail"
        src={thumbnails.medium.url}
        className="w-full rounded-lg"
      />
      <ul className="p-2">
        <li
          className="text-sm font-medium line-clamp-2"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {trimmedTitle}
        </li>
        <li className="text-xs text-gray-600">{channelTitle}</li>
        <li className="text-xs text-gray-600">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;

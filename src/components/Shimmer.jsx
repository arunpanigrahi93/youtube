import React from "react";

const Shimmer = () => {
  const shimmerCards = Array.from({ length: 12 });

  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {shimmerCards.map((_, index) => (
        <div key={index} className="w-72 animate-pulse">
          <div className="bg-gray-300 h-40 w-full rounded-lg" />
          <ul className="p-2">
            <li className="h-4 bg-gray-300 rounded w-11/12 mb-2"></li>
            <li className="h-3 bg-gray-300 rounded w-8/12 mb-1"></li>
            <li className="h-3 bg-gray-300 rounded w-6/12"></li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;

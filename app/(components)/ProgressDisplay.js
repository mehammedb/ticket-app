import React from "react";

const ProgressDisplay = ({ progress }) => {
  return (
    <div className="bg-gray-200 w-full h-2.5 rounded-full">
      <div
        className="bg-blue-600 h-2.5 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressDisplay;

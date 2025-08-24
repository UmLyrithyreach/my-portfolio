import React from "react";

const PlaceholderImage = ({ width = 400, height = 300, title = "Project Image" }) => {
  return (
    <div 
      className="bg-primary-3 dark:bg-primary-2 flex items-center justify-center text-2ndry-2 dark:text-2ndry-1 rounded-lg"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className="text-center">
        <div className="text-4xl mb-2">🖼️</div>
        <div className="text-sm">{title}</div>
      </div>
    </div>
  );
};

export default PlaceholderImage;

import React from "react";
import "./index.scss";

const Video = ({ videoUrl }) => {
  return (
    <div className="allpageinfo-video-container">
      <div className="allpageinfo-video-content">
        <video controls>
          <source src={videoUrl} type="video/mp4" />
          <source src={videoUrl} type="video/ogg" />
          <source src={videoUrl} type="video/webp" />
        </video>
      </div>
    </div>
  );
};

export default Video;

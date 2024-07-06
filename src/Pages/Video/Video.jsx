import React from "react";
import "./Video.css";
import Playvideo from "../../Components/PlayVideo/Playvideo";
import Recommend from "../../Components/Recommend/Recommend";
import { useParams } from "react-router-dom";


const Video = () => {
  const {videoId,categoryId}=useParams();
  return (
    <div className="play-container">
     <Playvideo videoId={videoId}/>
     <Recommend categoryId={categoryId}/>
    </div>
  );
};

export default Video;

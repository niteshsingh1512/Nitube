import React, { useEffect, useState } from "react";
import "./Playvideo.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import user_profile from "../../assets/user_profile.jpg";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";

const Playvideo = ({ videoId }) => {
  const [apiData, setapiData] = useState(null);
  const [channeldata, setchanneldata] = useState(null);
  const [commentdata, setcommentdata] = useState([]);
  const [subscribed, setSubscribed] = useState(false);

  const fetchVideoData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((response) => response.json())
      .then((data) => setapiData(data.items[0]));
  };

  const fetchChannelData = async () => {
    if (!apiData) return;
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url)
      .then((response) => response.json())
      .then((data) => setchanneldata(data.items[0]));
  };

  const fetchCommentData = async () => {
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResult=20&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comment_url)
      .then((response) => response.json())
      .then((data) => setcommentdata(data.items));
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchChannelData();
  }, [apiData]);

  useEffect(() => {
    fetchCommentData();
  }, [videoId]);

  const handleSubscribe = () => {
    setSubscribed(true);
  };

  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : ""}</h3>
      <div className="play-video-info">
        <p>
          {apiData ? value_converter(apiData.statistics.viewCount) : "20k"}{" "}
          Views &bull;{" "}
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>

        <div>
          <span>
            <img src={like} alt="" />
            {apiData ? value_converter(apiData.statistics.likeCount) : "250"}
          </span>
          <span>
            <img src={dislike} alt="" />
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={channeldata ? channeldata.snippet.thumbnails.default.url : ""}
          alt=""
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : "Title"}</p>
          <span>
            {channeldata
              ? value_converter(channeldata.statistics.subscriberCount)
              : "1M"}{" "}
            Subscribers
          </span>
        </div>
        <button
          onClick={handleSubscribe}
          className={subscribed ? "subscribed" : ""}
        >
          {subscribed ? "Subscribed" : "Subscribe"}
        </button>
      </div>
      <div className="vid-description">
        <p>
          {apiData
            ? apiData.snippet.description.slice(0, 300)
            : "Loading description..."}
        </p>
        <hr />
        <h4>
          {apiData ? value_converter(apiData.statistics.commentCount) : 150}{" "}
          Comments
        </h4>
        {commentdata.map((item, index) => {
          const comment = item.snippet.topLevelComment.snippet;
          return (
            <div key={index} className="comments">
              <img src={comment.authorProfileImageUrl} alt="" />
              <div>
                <h3>
                  {comment.authorDisplayName}{" "}
                  <span>{moment(comment.publishedAt).fromNow()}</span>
                </h3>
                <p>{comment.textDisplay}</p>
                <div className="comment-section">
                  <img src={like} alt="like" />
                  <span>{value_converter(comment.likeCount)}</span>
                  <img src={dislike} alt="dislike" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Playvideo;

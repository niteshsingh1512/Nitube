import React, { useEffect, useState } from "react";
import "./Recommend.css";
import { API_KEY, value_converter } from "../../data";
import { Link } from "react-router-dom";
import moment from "moment"; // Added moment for date handling

const Recommend = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const relatedvideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=15&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
    const response = await fetch(relatedvideo_url);
    const data = await response.json();
    setApiData(data.items);
  };

  useEffect(() => {
    fetchData();
  }, [categoryId]);

  return (
    <div className="recommended">
      {apiData.map((item, index) => {
        const publishedAt = moment(item.snippet.publishedAt).fromNow();

        return (
          <Link
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            key={index}
            className="side-vlist"
          >
            <img
              src={item.snippet.thumbnails.medium.url}
              alt={item.snippet.title}
            />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_converter(item.statistics.viewCount)} Views</p>
              <p className="date-info">{publishedAt}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommend;

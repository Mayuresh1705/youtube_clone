import React, { useEffect, useState } from "react";
import Style from "../CSS/MainBox.module.css";

const MainBox = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");

  async function apiData() {
    const params = {
      part: "snippet",
      chart: "mostPopular",
      maxResults: 12,
      regionCode: "IN",
      key: import.meta.env.VITE_YOUTUBE_API_KEY,
    };

    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?${new URLSearchParams(
        params
      )}`
    );

    const data = await res.json();
    setVideos(data.items);
  }

  useEffect(() => {
    apiData();
  }, []);

  return (
    <>
      {selectedVideo && (
        <div className={Style.player}>
          <iframe
            src={`https://www.youtube.com/embed/${selectedVideo}`}
            title="YouTube Player"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <main className={Style.main}>
        {videos.map((video) => (
          <article
            key={video.id}
            className={Style.card}
            onClick={() => setSelectedVideo(video.id)}
          >
            <img
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
            />
            <h3>{video.snippet.title}</h3>
          </article>
        ))}
      </main>
    </>
  );
};

export default MainBox;
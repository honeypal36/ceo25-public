import React from "react";
import { Chrono } from "react-chrono";

const Timeline = () => {
  const items = [
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
  ];

  return (
    <div style={{ width: "500px", height: "400px" }}>
      <Chrono items={items} mode="VERTICAL" />
    </div>
  );
};
export default Timeline;
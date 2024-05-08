import React from "react";
import "./News.css"

export const News = () => {
  return (
    <div>
    <div className="large-box">
    <div className="small-box">
      <h1>Welcome to our news and events</h1>
    </div>
    </div>
    <div className="full-box">
      <div className="mini-box1">
      <div className="sub-box1">
      <ul>
        TMA VP Dr. Paschal Waniha elected to INFCOM. 
        Enhancing Meteorological Services.  <a href="">Read more...</a>
        </ul>
        </div>
      </div>
      <div className="mini-box2">
      <div className="sub-box2">
        <ul>
        Muyeye attends Climate Education Fellowship 2024, 
        focusing on Climate Entrepreneurship. <a href="">Read more...</a>
        </ul>
        </div>
      </div>
      <div className="mini-box3">
       <div className="sub-box3">
        <ul>
        Joined hands to reduce waste at 
        Kawe Beach on March 30, 2024.  <a href="">Read more...</a>
        </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

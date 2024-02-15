import React from "react";
import "../../App.css";
import imgdropdown from '../../images/dropdownsetting.jpg'
export const Tasks = ({ question4, calender }) => {
  return (
    <div className="up-frame" id="1:159">
      <div className="up-frame-1" id="I1:159;244:934">
        <div className="question1" id="I1:159;244:935">
          {question4}
        </div>
        <div className="question1-time" id="I1:159;244:936">
          {calender}
        </div>
      </div>
      <div>
        <img src={imgdropdown} alt="..."></img>
      </div>
    </div>
  );
};

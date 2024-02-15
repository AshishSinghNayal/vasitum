import React from "react";
import "../../App.css";
import img13 from '../../images/profiledropdown.jpg'
import { Tasks } from "./Tasks";
export const UpcomingScheduleComponent = ({ date2, question4, calender, heading3, image }) => {
  return (
    <div className="upcoming-frame" id="1:152">
      <div className="upcoming-label1" >
        <div className="up-label11" id="1:153">
          Upcoming Schedule
        </div>
        <div className="up-label12" id="1:154">
          <div className="up-label13" id="1:156">
            {date2}
          </div>
          <div className="up-label-date">
            <img src={img13} alt="..."></img>
          </div>
        </div>
      </div>
      <div className="pri-label" id="1:150">
        Priority
      </div>
      <Tasks
        question4="Review Candidate Applications"
        calender="Today=11:30 AM"
      />
      <div className="pri-label" id="1:151">
        Other
      </div>
      <Tasks
        question4="Interview with candidates"
        calender="Today-10:30 AM"
      />
      <div className="bcd">
        <Tasks
          question4="Short Meeting with Product designer from IT"
          calender="Today-09:15 AM"
        />
      </div>
      <div classname="secondbutton-div">
        <button className="btn2">Create a New Schedule</button>
      </div>
    </div>
  );
};

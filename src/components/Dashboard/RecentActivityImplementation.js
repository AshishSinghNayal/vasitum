import React from 'react'
import '../../App.css'
export const RecentActivityImplementation = ({ datetime, activitycount }) => {
    return (
        <div className="recent-activity-bottom">
            <div className="recent-2" id="1:125">
                <div className="recent-date" id="1:126">
                    {datetime}
                </div>
                <div className="recent-label" id="1:127">
                    You Posted a New Job
                </div>
                <div className="recent-para"
                    id="1:128">
                    Kindly check the requirements and terms of work and make
                    sure everything is right.
                </div>
            </div>
            <div className="recent-bottom" id="1:129">
                <div className="p9" id="1:130">
                    Today you make {activitycount} Activity
                </div>
                <button className="button-nus" >See All Activity
                </button>
            </div>
        </div>

    )
}

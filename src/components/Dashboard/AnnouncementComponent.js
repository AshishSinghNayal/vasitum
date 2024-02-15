import React from 'react'
import { AnnouncementComponentImp1 } from './AnnouncementComponentImp1'
import { AnnouncementComponentImp2 } from './AnnouncementComponentImp2'
import '../../App.css'
export const AnnouncementComponent = ({ heading3, date, image, question1, time }) => {
    return (
        <div className="ann" id="1:134">
            <AnnouncementComponentImp1 heading3="Announcement" date="Today, 22 Aug 2023"  />
            <AnnouncementComponentImp2 question1="Outing Schedule for every department" time="2 Second Ago" />
            <AnnouncementComponentImp2 question1="Meeting HR Department" time="Yesterday,12.30 PM" />
            <AnnouncementComponentImp2 question1="IT Department need two more talents for UX/UI Designer" time="Yesterday,09.15 AM" />
            <div className="btn-lb" >
            <button className="btn1" >See All Announcement</button>
            </div>
        </div>
    )
}

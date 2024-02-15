import React from 'react'
import '../../App.css'
import img13 from '../../images/profiledropdown.jpg'
export const AnnouncementComponentImp1 = ({ heading3, date, image }) => {
  return (
    <div className="ann-1" id="1:139">
      <div className="ann-1-label" id="1:140">
        {heading3}
      </div>
      <div className="ann-1-label2" id="1:141">
        <div className="ann-11-label">{date}
        </div>
        <div className="ann-11-label1">
          <img src={img13} alt="..."></img>
        </div>
      </div>
    </div>
  )
}

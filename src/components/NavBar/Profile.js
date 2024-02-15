import React from 'react'
import img12 from '../../images/Mask Group.jpg'
import img13 from '../../images/profiledropdown.jpg'
import '../../App.css'
export const Profile = () => {
  return (
    <div className="frame-profile" id="1:230">
      <div className="imageuser"><img src={img12} id="1:231" alt="User-pic" />
      </div>
      <div className="profiledropdown" id="1:234">
        <div className="p1" id="1:235">
          Admirra John
        </div>
        <div className="pfdp" id="1:236" >
          <img className="dropdown" src={img13}></img>
        </div>
      </div>
    </div>
  )
}

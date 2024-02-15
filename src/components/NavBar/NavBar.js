import React from 'react'
import { Search } from './Search'
import img10 from '../../images/Alertbox.jpg'
import img11 from '../../images/messagebox.jpg'
//import { HiBellAlert } from "react-icons";
import '../../App.css'
import { Profile } from './Profile'
import imgbar from '../../images/ic_burgermenu.jpg'
export const NavBar = (imgUrl) => {
  return (
    <div className="navbar" id="1:214">
      <div className="frame1" id="1:215">
        <div className="menunav">
          <img src={imgbar} alt="|||" className="menubar"></img>
          <Search />
        </div>
        <div className="frame2" id="1:222">
          <div>
            <img href="#" className="icon-alert" src={img10} id="1:223" alt="Alert icon" />
          </div>
          <div>
            <img href="#" className="icon-message" src={img11} id="1:226" alt="Messege icon" />
          </div>
          <Profile />
        </div>
      </div>
    </div>
  )
}

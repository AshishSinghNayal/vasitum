import React from 'react'
import MenuComponent from './MenuComponent'
import '../../App.css'
import img6 from "../../images/ic_support.jpg"
import img7 from "../../images/ic_settings.jpg"
export const Other = () => {
  return (
    <div className="menu" id="1:202">
      <div className="main-menu" id="1:203">
        OTHER
      </div>
        <MenuComponent imgUrl={img6} content="Support" />
        <MenuComponent imgUrl={img7} content="Settings" />
    </div>
  )
}

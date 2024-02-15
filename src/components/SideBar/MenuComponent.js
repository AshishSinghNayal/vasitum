import React from 'react'
import '../../App.css'
const MenuComponent = ({ imgUrl, content }) => {
  return (
    <div  className="menu-component" id="1:171">
      <img
        className="menu-component1"
        src={imgUrl}
        id="1:172"
        alt="logo"
      />
      <div className="menu-component2" id="1:174">
        {content}
      </div>
    </div>
  )
}

export default MenuComponent

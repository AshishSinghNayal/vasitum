import React from 'react'
import '../../App.css'
import imgsearch from '../../images/Union.jpg'
export const Search = (imgUrl) => {
  return (
    <div className="frame3" id="1:216">
      <input type="text" placeholder="Search.." id="1:217" className="inputtext" />
      <img
        className="frame4"
        src={imgsearch}
        id="1:218"
        alt="alert icon"
      />
    </div>
  )
}

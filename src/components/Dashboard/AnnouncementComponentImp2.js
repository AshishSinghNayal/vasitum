import React from 'react'
import '../../App.css'
import imgpin from '../../images/pin.jpg'
import imgdropdown from '../../images/dropdownsetting.jpg'
export const AnnouncementComponentImp2 = ({ question1, time }) => {
    return (
        <div className="ann-con">
            <div className="ann-con-1" id="I1:136;244:946">
                <div className="ann-con-11" id="I1:136;244:947">
                    {question1}
                </div>
                <div className="ann-con-12" id="I1:136;244:948">
                    {time}
                </div>
            </div>
            <div className="ann-con-13" id="I1:136;244:949">
                <img className="ann-con-14" src={imgpin}
                    id="I1:136;244:950" alt="h1" />
                <div className="def">
                    <img src={imgdropdown} alt="..."></img>
                </div>
            </div>
        </div>
    )
}

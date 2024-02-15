import React from 'react'
import '../../App.css'
export const SmallContainerDashboard = ({ heading1,num1,description1, style}) => {
    
    return (
        <div className="available-position-8Qu" id="1:118" style={{...style}}>
            <div className="available-position" id="I1:118;244:976">
                {heading1}
            </div>
            <div className="available-num" id="I1:118;244:977">
                {num1}
            </div>
            <div className="num-of-hiring" id="I1:118;244:978" style={{...style}}>
                {description1}
            </div>
        </div>
    )
}

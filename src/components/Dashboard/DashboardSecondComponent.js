import React from 'react'
import { BiggerContainerDashboard, DashComponent2 } from './BiggerContainerDashboard'
import '../../App.css'
import graphimage1 from '../../images/Graph1.jpg'
import graphimage2 from '../../images/Graph2.jpg'
export const DashboardSecondComponent = ({ heading2, num2, men, women, imggraph }) => {
  return (
    <div className="huge">
      <div className="huge-flex">
        <BiggerContainerDashboard heading2="Total Employees" num2="216" men="120 Men" women="96 Women" imggraph={graphimage1} />
      </div>
      <div className="huge-flex" id="1:121">
        <BiggerContainerDashboard heading2="Talent Request" num2="16" men="6 Men" women="10 Women" imggraph={graphimage2}/>
      </div>
    </div>

  )
}

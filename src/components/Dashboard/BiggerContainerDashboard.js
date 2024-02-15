import React from 'react'
import '../../App.css'
export const BiggerContainerDashboard = ({ heading2, num2, men, women, imggraph }) => {
    return (
        <>
            <div className="huge-dash" id="I1:121;244:959">
                <div class="huge-dash1-1" id="I1:121;244:961">
                    {heading2}
                </div>
                <div className="huge-dash1-2" id="I1:121;244:962">
                    {num2}
                </div>
                <div class="men-women">
                    <div className="huge-dash1-3" id="I1:121;244:964">
                        {men}
                    </div>
                    <div className="huge-dash1-4" id="I1:121;244:965">
                        {women}
                    </div>
                </div>
            </div>
            <div className="graph1-con">
                <div className="graph1-1" id="I1:121;244:970">
                    +2%
                </div>
                <div className="graph-image">
                    <img src={imggraph} alt="graphimage1"></img>
                </div>
                <div className="graph1-2" id="I1:121;244:973">
                    +2% Past month
                </div>
            </div>
        </>

    )
}

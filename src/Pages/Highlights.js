import React from "react"
import high from "../Assets/Images/high.png"
import lights from "../Assets/Images/lights.png"
import p2017 from "../Assets/Images/2017.png"
import p2018 from "../Assets/Images/2018.png"
import p2019 from "../Assets/Images/2019.png"
import p2022 from "../Assets/Images/2022.png"
import './Highlights.css'
export default function Highlights(){
    return<div className="Highlights">
        <div style={{'display':"flex", 'flexDirection':'row', 'justifyContent':'center', 'textAlign':'center'}}>
        <img src={high} style={{'maxWidth':'40%'}}/>
        <img src={lights} style={{'maxWidth':'40%'}}/>
        </div>
        <div className="img-container">
            <img src={p2017} className="years-img"/>
            <div class="centretext">2017</div>
        </div>
        <div className="img-container">
            <img src={p2018} className="years-img"/>
            <div class="centretext">2018</div>
        </div>
        <div className="img-container">
            <img src={p2019} className="years-img"/>
            <div class="centretext">2019</div>
        </div>
        <div className="img-container">
            <img src={p2022} className="years-img"/>
            <div class="centretext">2022</div>
        </div>
        
    </div>
}
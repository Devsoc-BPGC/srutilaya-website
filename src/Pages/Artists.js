import React from "react"
import artists from "../Assets/Images/Screenshot_2023-09-23_at_1.16.png"
import dude from "../Assets/Images/image 9.png"
import './Artists.css'
export default function Artists(){
    return<div className="Artists">
        <img src={artists}/>
        <div>
        <p>Shri. MAHESH RAGHVAN</p>
        <p>Guest of Honor</p>
        <img style={{'border': '15px solid #900C3F','border-radius': '2rem'}} src={dude}/>
        </div>
        

    </div>
}
import React from "react"
import cycle from "../Assets/Images/cycle.png"
import polymer from "../Assets/Images/polymer.png"
import bank from "../Assets/Images/bank.png"
import fb from "../Assets/Images/fb.png"
import ig from "../Assets/Images/instagram.png"
import linkedin from "../Assets/Images/linkedin.png"
import './Footer.css'
export default function Footer(){
    return<div className="Footer">
       <div className="sponsors">
            <h2>Sponsors</h2>
            <img src={cycle}/>
            <img src={polymer}/>
            <img src={bank}/>
       </div>
       <div className="social-media">
            <h2>Social Media</h2>
            <img src={fb}/>
            <img src={linkedin}/>
            <img src={ig}/>
       </div>

    </div>
}
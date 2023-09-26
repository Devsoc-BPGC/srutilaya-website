import React from "react"
import srutilayalogo from "../Assets/Images/srutilayalogo.png"
import sursangamlogo from "../Assets/Images/sursangamlogo.png"
import aboutus from "../Assets/Images/aboutus.png"
import rangoli from "../Assets/Images/Rangolil.png"
import './Hero.css'
export default function Hero(){
    return<div className="Hero">
        <img src={srutilayalogo} className="srutilaya-logo"/>
        
        <img className="sursangam-logo"
            style={{ 
            'marginTop':"2rem",
            'paddingTop':'0',
            'display':'block',
            'marginLeft':'auto',
            'marginRight':'auto',
            'maxWidth':'100%',

        }} src={sursangamlogo} />

        <img className="about-us"
        style={{ 
            'marginTop':"23rem",
            'paddingTop':'0',
            'display':'block',
            'marginLeft':'auto',
            'marginRight':'auto',
            'maxWidth':'100%',

        }} src={aboutus} />   

        
        
    </div>
}
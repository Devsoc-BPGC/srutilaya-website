import React from "react"
import person1 from "../Assets/Images/Nandini-Shankar_e.png"
import person2 from "../Assets/Images/image 10.png"
import './Twopeople.css'
export default function Twopeople(){
    return<div className="Twopeople">
        <div>
        <img src={person1}/>
        <p>Smt. NANDINI SHANKAR</p>
        <p>Hindustani Violonist</p>
        </div>
        <div>
        <img src={person2}/>
        <p>Shri. ABHISHEK MISHRA  </p>
        <p>Tabla</p>
        </div>
    </div>
}
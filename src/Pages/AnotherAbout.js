import React from "react"
import srutilayalogo from "../Assets/Images/srutilayalogo.png"
import './AnotherAbout.css'
export default function AnotherAbout(){
    return<div className="AnotherAbout">
        <h1>About</h1>
        <img  src={srutilayalogo}/>   
        <p>Srutilaya, the classical arts club of BITS Pilani, K. K. Birla Goa campus.We are a enthusiastic group of classical music ,dance performers or enthusiasts.Srutilaya organises two main events in an year Sursangam and Thygaraja Aradhana.Sursangam is a annual memorial concert in memory of Late Prof Suresh Ramaswamy who was the founder of the club.The most renouned and established artists perform in this event.Thygaraja Aradhana is an ode to Saint Thygaraja who was the magical composer if Carnatic music.The club meets regularly for baithaks and practices.The invocation ceremony of most events ,conferences are never complete with a performance from Srutilaya.</p>
        <p>Coordinating Committee</p>
        <div className="coordi-names">
            <span>
                <p>Adithi-Coordinator</p>
                <p>Saransh-Sub Coordinator</p>
            </span>
            <span>
                <p>Soham-Publicity Head</p>
                <p>Sanika-Operations Head</p>
            </span>
            <span>
                <p>Abhiram-Logistics Head</p>
                <p>Vedang -Sponsorship Head</p>
            </span>
        </div>
    </div>
}
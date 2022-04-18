import React from "react";
import Clock from './Clock';
import './Home.css';
import people_image from '../images/people_image.png';
export default function Home ({userDetails}){
    return(
        <div className="Home">
            <p>User: <b> {userDetails.username} </b></p>
             <Clock/>
            <img id='people_img' src={people_image} alt='people'/>
        </div>
    )
}
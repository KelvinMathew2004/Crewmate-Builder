import React from "react";
import '../App.css';
import crewmates from '../assets/crewmates.png';
import UFO from '../assets/UFO.png';

const HomePage = () => {
    return (
        <div className="HomePage">
            <div style={{ textAlign: "center" }}>
                <h1>Welcome to the Crewmate Creator!</h1>
                <h3>Here is where you can create your very own set of crewmates before sending them off into space!</h3>
            </div>
            <div className="home-image">
                <img src={crewmates} alt="crewmates" />
                <img src={UFO} alt="UFO" className="UFO-image" />
            </div>
        </div>
    );
}

export default HomePage;
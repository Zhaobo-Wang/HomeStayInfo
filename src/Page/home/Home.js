import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import HomePic from "../../img/home_pic.png"
const Home = () => {
    return (
        <div>
            <div className="homepic">
                <img src={HomePic} alt="HomePic" className="homepic-image"></img>
                <Link to="/main/list" className="homepic-link">Explore</Link>
            </div>
        </div>
    )
};


export default Home;
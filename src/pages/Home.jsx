import React from "react"
import { Link } from "react-router-dom"

import CountUp from 'react-countup';

export default function Home() {
    return (
        
        <div className="home">
        
        <div className="home-text">
        <h1>Discover a place <br/>you`ll love to live </h1>
        <p>Find a varieity of properties that suit you very easily <br/>
         Forget all difficulties in finding a residence for you</p>
        <Link to="vans">Rent a house</Link>
        <div className=" stats">
                    <div className="flexColCenter ">
                        <span className="stat">
                            <CountUp start={8800} end={9000} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Premium Product</span>
                    </div>
                    <div className="flexColCenter ">
                        <span className="stat">
                            <CountUp start={1950} end={2000} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Happy Customers</span>
                    </div>
                    <div className="flexColCenter ">
                        <span className="stat"> 
                            <CountUp  end={28}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Award Winnings</span>
                    </div>
                </div>
            </div>
        
        <div className="home-container">
        <img src="./r-architecture-2gDwlIim3Uw-unsplash.jpg" alt="" />
        </div>
        </div>
        
    )
};
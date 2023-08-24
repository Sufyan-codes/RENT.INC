import React from "react"
import bgImg from "../assets/images/greg-rivers-rChFUMwAe7E-unsplash.jpg"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page-container">
            <div className="about-container">
            <div className="about-img">
            <img src={bgImg} className="about-hero-image" />
            </div>
            <div className="about-page-content">
                <h1>We Bring you The Best Offer For Your Home</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                <div className="about-page-cta">
                <h2>Your destination is waiting.<br />Your house is ready.</h2>
                <Link className="link-button" to="/vans">Explore our Houses</Link>
            </div>
           </div>
            
            </div>
           
        </div>
    );
}
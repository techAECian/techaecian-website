import React from 'react'
import './home.css'
import headerImage from '../../assets/home/header.svg'
const Home = () => {
    return (
        <div className="aec__home section-padding">
            <div className="aec__home-header">
                <div className="aec__home-header__content">
                    <h1>Innovating the future, <span>one step at a time.</span></h1>
                    <p>Innovate with us, lead the way with our club</p>
                    <div className="aec__home-header__content-links-container">
                        <button>Get started {'>'} </button>
                        <a href="#">Learn More</a>
                    </div>
                </div>
                <div className="aec__home-header__image">
                    <img src={headerImage} alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default Home
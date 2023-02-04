import React from 'react'
import './home.css'
import headerImage from '../../assets/home/header.svg'
import introImage from '../../assets/home/intro.svg'
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
            <div className="aec__home-intro section-padding">
                <div className="aec__home-intro__image">
                    <img src={introImage} alt="" />
                </div>
                <div className="aec__home-intro__content">
                    <h1>Who are we?</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, similique sapiente. Tempora eius dolor iste inventore nemo quidem qui repellendus nihil, accusamus doloribus facere alias ex dolores. Odio alias voluptatem consectetur molestiae possimus ex, maiores asperiores aliquid, illo, unde aspernatur pariatur esse nam reiciendis error laborum mollitia itaque velit in optio aliquam autem reprehenderit tempora repellendus. Voluptas in nam magnam.</p>
                </div>
            </div>
        </div>
    )
}

export default Home
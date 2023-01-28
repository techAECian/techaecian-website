import React, { useState } from 'react'
import './navbar.css'
import { BiMenuAltRight } from 'react-icons/bi'
import { RiCloseLine } from 'react-icons/ri'

const Links = () => (
    <>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#intrests">Our intrests</a>
        <a href="#blog">Blog</a>
        <a href="#projects">Projects</a>
    </>
)

const Navbar = () => {
    const [menuToggle, setMenuToogle] = useState(false);

    const menuToggler = () => {
        setMenuToogle(!menuToggle);
    }
    return (
        <div className="aec__navbar section-padding">
            <div className="aec__navbar-brand">
                <p>TechAECian</p>
            </div>
            <div className="aec__navbar-links">
                <Links />
            </div>
            <div className="aec__navbar-sign">
                <p>Sign In</p>
                <button>Sign Up</button>
            </div>
            <div className='aec__navbar-menu'>
                <div className="aec__navbar-menu__icon">
                    {menuToggle ? <RiCloseLine onClick={menuToggler} /> : <BiMenuAltRight onClick={menuToggler} />}
                </div>
                {menuToggle && <div className="aec__navbar-menu__container ">
                    <div className="aec__navbar-menu__container-links" onClick={menuToggler}>
                        <Links />
                        <div className="aec__navbar-menu__container-sign">
                            <p>Sign In</p>
                            <button>Sign Up</button>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Navbar
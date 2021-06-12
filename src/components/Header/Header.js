import './Header.css';

import { useState, useEffect } from 'react';

import Image from "../../Logo.png";

const Header = () => {

    const [darkbar, setDarkBar] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setDarkBar(true)
            } else {
                setDarkBar(false);
            }
        });
        return () => {
            window.removeEventListener('scroll');
        }
    }, []);

    return (
        <header className={`header ${darkbar && "dark"}`} >
            <div className="logo">
                <img src={Image} alt="Netflix logo" />
            </div>
            <div className="header-buttons">
                <button className="sign-up">Join Now</button>
                <button className="log-in">Sign in</button>
            </div>
        </header>
    )
}

export default Header

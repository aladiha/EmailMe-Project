import React from 'react';
import './header.css';


const Header = () => {

    return <div className="header">
        <div className="logo">
            EmailMe
        </div>
        <div className="navigation-bar">
            <div><a href="#">Log in with google</a></div>
        </div>
    </div>
}

export default Header;
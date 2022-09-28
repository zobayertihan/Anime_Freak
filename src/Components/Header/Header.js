import React from 'react';
import logo from '.././Images/anime-freak.png';

const Header = () => {
    return (
        <div className='container p-5'>
            <nav className="navbar bg-light">
                <div className="">
                    <img src={logo} alt="" width="30" height="30" className="d-inline-block align-text-top me-5 ms-2" />
                    Anime Freak
                </div>
            </nav>
        </div>
    );
};

export default Header;
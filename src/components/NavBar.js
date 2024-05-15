import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <span>JSOM</span>
            </div>
            <div className="navbar-center"></div>
            <div className="navbar-right">
                <a href="#authors">Authors</a>
                <a href="#mostlikedpost">MostLikedPost</a>
                <a href="#mostcommentpost">MostCommentPost</a>
            </div>
        </nav>
    );
}

export default NavBar;
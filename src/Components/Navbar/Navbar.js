import React from 'react';
import './Navbar.css';


const Navbar = () => {
    return (
        <div className="Navbar">
            <nav>
                <div className="Logo">
                    <img src="/src/Accessories/Logo.png" alt=""/>
                </div>
                <div className="search">
                    <form action="">
                        <input type="text" placeholder="Search your Destination..."/>
                    </form>
                </div>
            
                <a href="login">Login</a>
                <a href="contact">Contact</a>
                <a href="blog">Blog</a>
                <a href="/destination">Destination</a>
                <a href="/news">News</a>   
            </nav>
        </div>
    );
};

export default Navbar;
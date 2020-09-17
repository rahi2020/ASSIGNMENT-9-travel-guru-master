import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import './Travel.css'



const Travel = () => {
    return (
        <div className="travel-container">
            <div className="info-container">
                <h1>COX'S BAZAR</h1>
                <br/>
                <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sendy beach, and it...</p>
                <br/>
                
                 <button type="button" class="btn btn-warning"><Link to="/destination"><span className="booking">Booking</span></Link></button>

            
               
                
            </div>
           
           
        </div>
    );
};

export default Travel;
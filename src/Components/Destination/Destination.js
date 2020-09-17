import React from 'react';
import { Link } from 'react-router-dom';
import './Destination.css'

const Destination = () => {
    return (
        <div className="travel-container">
             <div className="info-container">
                <h1>COX'S BAZAR</h1>
                <br/>
                <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sendy beach, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, debitis. Minus consectetur maxime expedita repellat placeat non. Rem neque, quaerat modi cum beatae velit ullam possimus hic atque maxime impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sit voluptate, nobis, ipsam amet laudantium, quasi vero vitae placeat nulla nam! Tempora quibusdam nemo blanditiis qui aspernatur voluptate tenetur magnam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, eum reiciendis. Consequuntur debitis neque, minima eum perspiciatis vero, unde eaque laborum, laboriosam accusamus eligendi quis impedit fugit et! Et magnam eos, saepe dolore itaque voluptatibus debitis doloremque excepturi quis earum illo quidem mollitia inventore aspernatur, iusto omnis. Quod, incidunt sunt? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis sunt amet ullam rerum quisquam perspiciatis sequi eligendi cum necessitatibus unde officia molestiae est vitae mollitia dolore sapiente, ratione totam commodi harum reprehenderit, itaque maxime. Asperiores, labore reiciendis eaque atque nesciunt tempora odio error ratione! Minima quaerat voluptatibus quae delectus eos. </p>
                <br/>
            </div>
            
                <div className="booking-form-box">
                    <div className="booking-form">
                        <label  htmlFor=""><span className="label">Orgin</span></label>
                        <br/>
                        <input className="orgin"  type="text"/>
                        <br/>

                        <label  htmlFor=""><span className="label">Destination</span></label>
                        <br/>
                        <input type="text"/>
                        <br/>

                        <label  htmlFor=""><span className="label">From</span></label>
                        <br/>
                        <input type="date" className="form-control select-date"/>
                        <br/>

                        <label  htmlFor=""><span className="label">To</span></label>
                        <br/>
                        <input type="date" className="form-control select-date"/>
                        <br/>
                    </div>

                    
                    <div>
                        <button type="button" class="btn btn-warning booking" ><Link to="/"><span className="booking">Start Booking</span></Link></button>
                    </div>
                </div>
           
        </div>
    );
};

export default Destination;
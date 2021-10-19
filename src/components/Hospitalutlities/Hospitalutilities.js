import React from 'react';
import './Hospitalutilites.css'

const Hospitalutilities = () => {
    return (
        <div className='hospitalutilites d-flex justify-content-around align-items-center p-5'>
            <div className='images mx-5'>
               <img src="https://i.ibb.co/R6Mfyqb/image-001.jpg" alt="" />
            </div>
            <div>
                <h1>Medico Hospital</h1>
                <p>The reputation of Medico Hospital is the result of quality clinical outcome and comprehensive care, made achievable through world class integrated healthcare facilities by highly trained professionals. Thus, Medico Hospital strives to meet patients’ standards through quality healthcare and making a difference in their lives.</p>
                <ul>
                    <li>Coffee Stalls and Water Dispenser</li>
                    <li>24 hours all Diagnostic service</li>
                    <li>USA-standard housekeeping and cleaning services</li>
                    <li>24/7 Cafeteria Services</li>
                    <li>Roof-top garden</li>
                    <li>Waiting Area</li>
                    <li>USA-standard safety and security system</li>
                </ul>
                <button className='me-2 btn btn-success'>Appointment</button>
               
                <button className='btn btn-success'>TimeTable</button>
            </div>
        </div>
    );
};

export default Hospitalutilities;
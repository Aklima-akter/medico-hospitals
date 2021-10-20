import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';




const Services = () => {

    const [services, setServices] =useState([]);
        useEffect( ()=>{
             fetch('./services.json')
             .then(res => res.json())
             .then(data =>setServices(data))   
        },[])
        
    return (
        
        < div className='services py-5 mt-5' id="services" >
        <h2 className='fw-bold text-center mt-5 '>OUR SERVICE</h2>
        <p className='text-center'>We try to give best service</p>
        <div id='services' className='d-flex d-sm-flex justify-content-around flex-wrap'>
            
            
            {
                services.map(service => <Service
                key ={service.id}
                service ={service}
                ></Service>)
            }
            
        </div>
        </div>
    );
};

export default Services;
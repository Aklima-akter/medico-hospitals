import React from 'react';
import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { Button, Form  } from 'react-bootstrap';




const ContactUs = () => {
    const element1 = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const element2 = <FontAwesomeIcon icon={faEnvelope} />
    const element3 = <FontAwesomeIcon icon={faPhoneAlt} />

    return (
        <>
        <div >
            <h1 className='text-center pt-5'>Contact us</h1>
            <div className=' d-flex justify-content-around align-items-center p-5'>
                <div className='information border border-success border-3 bg-success text-white p-4 rounded-3 text-center'>
                    <h2>{element1}</h2>
                    <h3 className='p-2'>Our Address</h3>
                    <p>Moinpur, Kasba, 
                        <br/>
                        Brahmanbaria</p>
                </div>
                <div className='information border border-success border-3 bg-success text-white p-4 rounded-3 text-center'>
                    <h2>{element2}</h2>
                    <h3>Email Address</h3>
                    <p>abcd@gmail.com</p>
                    <p>xyz@gmail.com</p>
                </div>
                <div className='information border border-success border-3 bg-success text-white p-4 rounded-3 text-center'>
                    <h2>{element3}</h2>
                    <h3>Help Line</h3>
                    <p>Appointmemt: 5280985</p>
                    <p>Emergency: 5280956</p>
                </div>
            </div>
        </div>
        <div className='p-5 message'>
            <h2 className='text-center pb-4'>Take Advice from our Specialist</h2>
        <div className="row ">
        <div className="col">
             <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
            </div>
        <div className="col">
            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
        </div>
        </div>
        <br />
        <div className="row ">
        <div className="col">
             <input type="email" className="form-control" placeholder="Your email" aria-label="Your Email"/>
            </div>
        <div className="col">
            <input type="password" className="form-control" placeholder="Your password" aria-label="Your password"/>
            
        </div>
        
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <br />
                <Button variant="secondary" size="md">
                    {element2} Send Massage
                </Button>
        </div>
        </>
    );
};

export default ContactUs;
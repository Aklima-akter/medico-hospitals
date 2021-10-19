import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-above d-flex justify-content-around align-items-center ">
                <div className='about-medico'>
                <h4>About Medico</h4>
                <hr className='break' />
                <p>Definition. Hospital services is a term that refers to medical and surgical services and the supporting laboratories, equipment and personnel that make up the medical and surgical mission of a hospital or hospital system.</p>
                </div>
                <div>
                    <h2>OPENING HOURS</h2>
                    <hr className='break'/>
            <table className="table">
 
                <tbody>
                 <tr>
                    <th>Monday - Saturday</th>
                    <td>09:00 - 19:00</td>
                 </tr>
                 <tr>
                    <td>Sunday</td>
                    <td>09:00 - 19:00</td>
                 </tr>
                 <tr>
                     <td>Holidays</td>
                     <td className='text-danger'>CLOSED</td>
                 </tr>
                </tbody>
            </table>
                </div>
            </div>
            <div className='copy text-center fw-bold py-5 text-white'>© 2021 Your Company. By Aklima</div>
        </div>
    );
};

export default Footer;
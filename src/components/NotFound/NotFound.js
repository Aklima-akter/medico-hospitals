import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img src="https://i.ibb.co/RSqD7Pv/404.jpg" alt="" />
            <br />
            <Link to='/home'><button className='btn btn-primary'>go back</button></Link>
        </div>
    );
};

export default NotFound;
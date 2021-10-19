import {Link} from 'react-router-dom';
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = ({service}) => {
    const {id,img, info, name} =service;

   
    return (
        <div className='service my-4'>
            <Card style={{ width: '22rem' }}>
                <Card.Img style={{ height: '250px' }} variant="top" src={img} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{info.slice(0, 100)}</Card.Text>
           <Link to={`/serviceDetails/${id}`}><Button variant="success">Details</Button></Link>
           
            </Card.Body>
         </Card>
        </div>
    );
};

export default Service;
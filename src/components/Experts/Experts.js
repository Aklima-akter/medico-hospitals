import React from 'react';
import { Card } from 'react-bootstrap';
import './Experts.css'


const Experts = () => {
    return (
        <div id="experts" className='containter mt-5'>
            <h2 className=' text-center text-success fs-1 p-5'>Our Spacialist</h2>
            
            <div className='d-flex justify-content-around flex-wrap text-center'>
            <Card style={{ width: '22rem' }} className='mb-5'>
                <Card.Img style={{ height: '250px' }} variant="top" src='https://i.ibb.co/qYmBBzf/doctor-003.jpg' />
            <Card.Body className='body'>
            <Card.Title >Philiph Ralph</Card.Title>
            <Card.Text >Epilepsy</Card.Text>
          
            </Card.Body>
         </Card>
            <Card style={{ width: '22rem' }} className='mb-5'>
                <Card.Img style={{ height: '250px' }} variant="top" src='https://i.ibb.co/7QFvL9D/doctor-002.jpg' />
            <Card.Body className='body'>
            <Card.Title>Isumi Yamato</Card.Title>
            <Card.Text>Brain Surgery</Card.Text>
          
            </Card.Body>
         </Card>
            <Card style={{ width: '22rem' }} className='mb-5'>
                <Card.Img style={{ height: '250px' }} variant="top" src='https://i.ibb.co/XWLWXK7/doctor-001.jpg' />
            <Card.Body className='body'>
            <Card.Title>Lorenz Anders</Card.Title>
            <Card.Text>Neurologyst</Card.Text>
          
            </Card.Body>
         </Card>
            <Card style={{ width: '22rem' }} className='mb-5'>
                <Card.Img style={{ height: '250px' }} variant="top" src='https://i.ibb.co/yfbZW3G/doctor-004.jpg' />
            <Card.Body className='body'>
            <Card.Title>Alessa Aladens</Card.Title>
            <Card.Text>Neurologyst</Card.Text>
          
            </Card.Body>
         </Card>
            <Card style={{ width: '22rem' }} className='mb-5'>
                <Card.Img style={{ height: '250px' }} variant="top" src='https://i.ibb.co/17P6YWk/doctor-006.jpg' />
            <Card.Body className='body'>
            <Card.Title>Dr. Jhon Doe</Card.Title>
            <Card.Text>Neurologist</Card.Text>
          
            </Card.Body>
         </Card>
            <Card style={{ width: '22rem' }} className='mb-5'>
                <Card.Img style={{ height: '250px' }} variant="top" src='https://i.ibb.co/37TbdR9/doctor-005.jpg' />
            <Card.Body className='body'>
            <Card.Title>Almendra zarata</Card.Title>
            <Card.Text>Gynologist</Card.Text>
          
            </Card.Body>
         </Card>
            </div>
        

        </div>
    );
};

export default Experts;
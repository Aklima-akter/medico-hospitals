import React from 'react';
import './Achivements.css'

const Achivesments = () => {
    return (
        <div className=' p-5 achive'>
            <h2 className='text-center '>Achivements</h2>
            <p className='para mx-auto pb-5 text-center'>Each March Gifford Medical Center’s
                 corporators gather to review the year past.</p>
            <div className=' d-flex justify-content-around align-items-center text-center'>
             <div className='achivements border border-info '>
                <h2>800+</h2>
                <p>Happy Clients</p>
             </div>
             <div className='achivements border border-info'>
               <h2>780</h2>
                <p>Surgeries</p>
             </div>
             <div className='achivements border border-info'>
                 <h2>18</h2>
                 <p>Neurologists</p>
             </div>
             <div className='achivements border border-info '>
                 <h2>12</h2>
                 <p>Awards Won</p>
             </div>
            </div>
        </div>
    );
};

export default Achivesments;
import React from 'react';
import Achivesments from '../Achivements/Achivesments';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Hospitalutilities from '../Hospitalutlities/Hospitalutilities';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id='home' className=''>
            <Banner></Banner>
            <Hospitalutilities></Hospitalutilities>
            <Services></Services>
            <Experts></Experts>
            <Achivesments></Achivesments>
            
        </div>
    );
};

export default Home;
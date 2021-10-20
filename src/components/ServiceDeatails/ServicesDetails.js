import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router';
import { useDetails } from '../../App';

const ServicesDetails = () => {
    const {serviceId} =useParams();
    const history = useHistory();
    const [details] =useContext(useDetails);
    const findDetails = details.find(detail => detail.id === Number(serviceId));
    const {img, name, info, description} =findDetails;

    console.log(findDetails);

    // console.log(details);

    return (
        <div>
            {
                details?
                <div className="card mb-3">
    <img src={img} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text"><strong>{info}</strong></p>
    <p className="card-text">{description}</p>
    </div>
    </div>
    : history.push('/home')
            }
        </div>
    );
};

export default ServicesDetails;
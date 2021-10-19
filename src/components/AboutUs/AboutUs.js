import React from 'react';

const AboutUs = () => {
    return (

        <>
        <div id='about' className='d-flex justify-content-around align-items-center p-5'>
            
            <div className='about'>
                <h1>About us</h1>
                <p> Medico Hospital, an institution that is built, staffed, and equipped for the diagnosis of disease; for the treatment, both medical and surgical, of the sick and the injured; and for their housing during this process. The modern hospital also often serves as a centre for investigation and for teaching.</p>
            </div>
            <div>
                <img src="https://i.ibb.co/s5v80NX/hospital-room.jpg" alt=""  />
            </div>
        </div>

        <div className='d-flex justify-content-around align-items-center p-5'>
            <div className='me-3'>
            <img src="https://i.ibb.co/1fXfmwf/health-is-all-we-social-media-post-medicine-healthcare-advertising-web-banner-template-social-media.jpg" alt=""  />
            </div>
            <div>
                <h1>Medico Hospital</h1>
                <p>Medico Hospitals have long existed in most countries. Developing countries, which contain a large proportion of the world’s population, generally do not have enough hospitals, equipment, and trained staff to handle the volume of persons who need care. Thus, people in these countries do not always receive the benefits of modern medicine, public health measures, or hospital care, and they generally have lower life expectancies.</p>

                <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Our Mission
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
          With the advance in medical science and the ever-increasing cost of hospital operations, the progressive-care concept is more attractive, both for outpatient and inpatient care. Progressive care can be divided into five categories: (1) intensive care, (2) intermediate care, (3) self-care, (4) long-term care, and (5) organized home care.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Our Vision
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      To ensure accessible and affordable quality healthcare by compassionate medical professionals to all. To be the centre of excellence for medical research and academics. To cultivate an environment of trust, honesty, mutual respect, equality, and ethics.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Our Phylosopy
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Respect for the rights of patients by open-handed provision of medical information. Impartiality in providing any patient with the opportunity for treatment. Creation of fine teamwork through mutual trust among hospital staff. Constant efforts to maintain and improve treatment safety.
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
        </>
    );
};

export default AboutUs;
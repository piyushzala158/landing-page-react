import React from "react";
import "./Assets/scss/Services.scss";
import Asset5 from './Assets/images/Asset 5 1.svg'
import Asset5_2 from './Assets/images/Asset 5 2.svg'
import Asset6 from './Assets/images/Asset 6 1.svg'
import Asset7 from './Assets/images/Asset 7 1.svg'
import Asset8 from './Assets/images/Asset 8 2.svg'
import engagementVector from './Assets/images/Engagement vector 1.svg'
import coominucationVector from './Assets/images/Coominucation vector 1.svg'
import facilationVector from './Assets/images/facilation vector 1.svg'
import consultationVector from './Assets/images/Consultation vector 1.svg'
import trainingVector from './Assets/images/Training and vector 1.svg'

function Services() {
  return (
    <div className="services-section" id="services">
      <div className="position-absolute services-section-vector">
        <img src={Asset5} />
      </div>
      
      <div className="container">
      <div className="row ">
        <div className="col-12 services-section-title">
          <h1>SERVICERS</h1>
          <hr className='underline'/>
        </div>
        <div className="col-lg-6">
          <div className="engagement">
            <h2 className="engagement-title">ENGAGEMENT</h2>
            <p className="engagement-text">
              We love what we do and are driven by achieving great results for
              our clients. Our awards and impressive client list are testament
              to our high quality approach. We deliver value, creaKvity, results
              and excepKonal levels of customer service and professionalism. We
              specialise in infrastructure development, energy and natural
              resources.
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="text-center">
            <img src={engagementVector} className="engagement-image"/>
          </div>
        </div>
        <div className="col-lg-6 text-center">
          <img src={coominucationVector} className="coominucation-img" />
        </div>
        <div className="col-lg-6 coominucation">
          <div>
            <h2 className="coominucation-title">Communications</h2>
            <p className="coominucation-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque
              et. Sit ac fames facilisis nibh faucibus.
            </p>
          </div>
        </div>
        
        <div className="col-lg-6 facilitation">
          <div>
            <h1 className="facilitation-title">FACILITATION</h1>
            <p className="facilitation-text">
              We love what we do and are driven by achieving great results for our
              clients. Our awards and impressive client list are testament to our
              high quality approach. We deliver value, creaKvity, results and
              excepKonal levels of customer service and professionalism. We
              specialise in infrastructure development, energy and natural
              resources.
            </p>
          </div>
        </div>
        <div className="col-lg-6 text-center">
          <img src={facilationVector} className="facilitation-img"/>
        </div>
        <div className="col-lg-6 text-center">
          <img src={consultationVector} className="consultation-img"/>
        </div>
        <div className="col-lg-6 consultation">
          <div>
          <h1 className="consultation-title">CONSULTATION AND RESEARCH</h1>
          <p className="consultation-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque
            et. Sit ac fames facilisis nibh faucibus.{" "}
          </p>
          </div>
        </div>

        <div className="col-lg-6 traning text-end">
          <div>
            <h1 className="traning-title">TRANING & MENTORING</h1>
            <p className="traning-text">
              We love what we do and are driven by achieving great results for our
              clients. Our awards and impressive client list are testament to our
              high quality approach. We deliver value, creaKvity, results and
              excepKonal levels of customer service and professionalism. We
              specialise in infrastructure development, energy and natural
              resources.
            </p>
          </div>
        </div>
        <div className="col-lg-6 text-center">
          <img src={trainingVector} className="traning-img" />
        </div>
      </div>
      </div>
      <div className="position-absolute services-section-vector-2">
        <img src={Asset6} />
      </div>
      <div className="position-absolute services-section-vector-3">
        <img src={Asset7} />
      </div>
      <div className="position-absolute services-section-vector-4">
        <img src={Asset8} />
      </div>
      <div className="position-absolute services-section-vector-5">
        <img src={Asset5_2} />
      </div>
      
    </div>
  );
}

export default Services;

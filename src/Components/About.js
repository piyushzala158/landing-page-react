import React from 'react'
import { Form } from 'react-bootstrap'
import './Assets/scss/About.scss'
import aboutImg from './Assets/images/about us 1.svg'
import enagagementIcon from './Assets/images/Enagagement icon 1.svg'
import coomunicationIcon from './Assets/images/coomunication icon 1.svg'

function About() {
  return (
    <div className='container text-center about-section' id='about'>
        <div className='row'>
            <div className='col-lg-6 about-image-container'>
            <img src={aboutImg} />
            </div>
            <div className='col-lg-6'>
            <div className='about-title'>
            <h1 className='about-title-text'>ABOUT US</h1>
            <hr className='underline'/>
            </div>
            <p className='about-text'>We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.</p>
            <div className='about-icons d-flex flex-column flex-lg-row'>
                <div className='text-start engagement'>
                <img src={enagagementIcon} className='engagement-icon'/>
                <h3 className='engagement-title'>Engagement</h3>
                <p className='engagement-text'>We are engagement specialists, who have led projects at all levels of the IAP2 spectrum. READ MORE</p>
                </div>
                <div className='text-start coomunication'>
                <img src={coomunicationIcon} className='coomunication-icon'/>
                <h3 className='coomunication-title'>Coomunication</h3>
                <p className='coomunication-text'>We are award-winning leaders in communications and campaign management. READ MORE</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About
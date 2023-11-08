import React from 'react'
import './Assets/scss/Footer.scss'
import facebook from './Assets/images/facebook 1.svg'
import linkedin from './Assets/images/linkedin 1.svg'
import Google from './Assets/images/Google.svg'

function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className='container'>
      <div className='row'>
        <div className='col-lg-3 social'>
          <h5 className='footer-title'>Social</h5>     
          <ul>
            <li className='ps-2'>
              <img src={facebook} />
              <a href='#'>Facebook</a>
              </li>
            <li>
              <img src={linkedin} />
              <a href='#'>Linkdin</a>
              </li>
            <li className='ps-2'>
              <img src={Google} />
              <a href='#'>Google +</a>
              </li>
          </ul>
        </div>
        <div className='col-lg-3 explore'>
          <h5 className='footer-title '>Explore</h5>
          <ul>
            <li>Services</li>
            <li>Team</li>
            <li>Clients</li>
          </ul>
        </div>
        <div className='col-lg-3 contact'>
          <h5 className='footer-title'>Contact</h5>
          <ul>
            <li>Lorem Ipsum dummy addres</li>
            <li>used for display</li>
            <li>1234567890</li>
          </ul>
        </div>
        <div className='col-lg-3 email'>
          <h5 className='footer-title'>Email</h5>
          <a href = "mailto: mendlesoncommunication@email.com">mendlesoncommunication@email.com</a>
        </div>
      </div>
      </div>
      <p className='text-center'>© Copyright 2018 Mendleson Communication Pvt Ltd </p>
      </div>
  )
}

export default Footer
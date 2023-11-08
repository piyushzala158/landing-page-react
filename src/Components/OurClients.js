import React from 'react'
import './Assets/scss/OurClients.scss'
import asset9 from './Assets/images/Assets 9 1.svg'
import layer19 from './Assets/images/Layer 19.svg'
import layer20 from './Assets/images/Layer 20.svg'
import BrigitteLogo from './Assets/images/1280px-Brigitte-Logo.svg'
import layer22 from './Assets/images/Layer 22.svg'
import BHPLogo from './Assets/images/BHP_2017_logo.svg'
import layer21 from './Assets/images/Layer 21.svg'
import layer23 from './Assets/images/Layer 23.svg'
import layer24 from './Assets/images/Layer 24.svg'
import MelbourneWaterLogo from './Assets/images/MelbourneWaterLogo-1024x282.svg'


function OurClients() {
  return (
    <div className='ourclients' id='clients'>
      <div className="position-absolute ourclients-vector">
        <img src={asset9} />
      </div>
      <div className='container'>
        <div className='ourclients-title'>
          <h1 className='ourclients-title-text'>OUR CLIENTS</h1>
          <hr className='underline' />
        </div>
        <div className='row gap-5 ourclients-images'>
          <div className='col-lg-12'>
            <img src={layer19} />
            <img src={layer20} />
            <img src={BrigitteLogo} />
            <img src={layer22} /> 
            <img src={BHPLogo} />
          </div>
          <div className='col-lg-12'>
            <img src={layer21} />
            <img src={layer23} />
            <img src={layer24} />
            <img src={MelbourneWaterLogo} /> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurClients
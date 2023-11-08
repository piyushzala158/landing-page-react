import React from 'react'
import './Assets/scss/OurProject.scss'
import OurProject_1 from './Assets/images/Our Project_ 1 img 1.svg'
import OurProject_2 from './Assets/images/Our Project _ 2 img 1.svg'
import OurProject_3 from './Assets/images/Our Project_ 3 img 1.svg'

function OurProject() {
  return (
    <div className='ourproject'>
      <div className='container'>
        <div className='ourproject-title'>
          <h1>OUR PROJECTS</h1>
          <hr className='underline' />
        </div>
      <div className='row ourproject-images'>
      <div className='col-lg-6'>
        <img src={OurProject_1} className='ourproject-images-1'/>
      </div>
      <div className='col-lg-6'>
        <img src={OurProject_2} className='ourproject-images-2'/>
        <img src={OurProject_3} className='ourproject-images-3'/>
      </div>
      </div>
      </div>
      
    </div>
  )
}

export default OurProject
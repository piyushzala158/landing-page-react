import React from 'react'
import Header from './Header'
import './Assets/scss/Home.scss'
import Typewriter from "typewriter-effect";
import Asset1 from './Assets/images/Asset 1.svg'
import Asset2 from './Assets/images/Asset 2.svg'
import Asset3 from './Assets/images/Assets-3.svg'
import Asset5 from './Assets/images/Graphic 1 2.svg'
import Asset6 from './Assets/images/Vector Smart Object21 1.svg'
import Asset7 from './Assets/images/Assets 4.svg'


function Home() {
  return (
    <>
    <div className='section-1'>
        <div className='bg-images'>
            <img src={Asset1} className='bg-image-1'/>
            <img src={Asset2} className='bg-image-2'/>
        </div>
        <Header/>
        <div className='hero-container z-2'>
                    
              <h1 className='hero-title'>
              <Typewriter
              className='hero-title'
              onInit={(typewriter)=> {
              typewriter
              .typeString("Mendleson Communication and Engagement")
              .pauseFor(1000)
              .start();
              }}
              />
              </h1>
              <h5 className='hero-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sed ipsum, ut quam volutpat, tortor.</h5>
              </div>
            <div className='bg-images'>
            <img src={Asset3} className='bg-image-3'/>
            <img src={Asset5} className='bg-image-4'/>
            <img src={Asset6} className='bg-image-5'/>
            <img src={Asset7} className='bg-image-6'/>
            </div>
    </div>  
              
              </>
  )
}

export default Home
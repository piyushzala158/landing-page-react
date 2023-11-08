import React from "react";
import "./Assets/scss/Ourteam.scss";
import asset8 from './Assets/images/Asset 8 3.svg'
import person1 from './Assets/images/Person 1 img 1.svg'
import person2 from './Assets/images/Person 2 img 1.svg'
import person3 from './Assets/images/Person 3 img 1.svg'


function Ourteam() {
  return (
    <div className="team-section">
      <div className="position-absolute team-section-vector">
        <img src={asset8} />
      </div>
      <div className="container">
        <div className="team-section-title">
        <h1 className="text-center">OUR TEAM</h1>
        <hr className='underline'/>
        </div>
        <div className="team-images row ">
          <div className="col-lg-4">
          <img src={person1} className="person-1-img" />
          <p>Jessica D’suza</p>
          </div>
          <div className="col-lg-4">
          <img src={person2} className="person-2-img" />
          <p>Johny Williams</p>
          </div>
          <div className="col-lg-4">
          <img src={person3} className="person-3-img"  />
          <p>Sanya R</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourteam;

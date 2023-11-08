import './Assets/scss/Header.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from 'react';
import Logo from './Assets/images/logo-1 1.svg'

function Header() {
  const [toggler,setToggler] = useState(true)

  return (
    <nav className="navbar custom-navbar navbar-expand-lg">
  <div className="container-fluid home-container">
    <a className="navbar-brand" href="#">
        <img src={Logo} />
    </a>
    <button className="navbar-toggler" onClick={() => setToggler(!toggler)}  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      {toggler ? <span className="navbar-toggler-icon"></span> : <span className="navbar-toggler-close text-center">X</span> }
    </button>
    <div className="collapse navbar-collapse menu" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#about">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#clients">Clients</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#footer">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header
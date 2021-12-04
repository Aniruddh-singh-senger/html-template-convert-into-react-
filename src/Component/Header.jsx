import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {
  return (
    <>

      <header>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
          <div className="container">
            <Link to="/Main" className="navbar-brand">Digi<span className="text-primary">Gram.</span></Link>

            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse collapse" id="navbarContent">
              <ul className="navbar-nav ml-lg-4 pt-3 pt-lg-0">
                <li className="nav-item active">
                  <Link to="/Main" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Services" className="nav-link">Services</Link>
                </li>
                <li className="nav-item">
                  <Link to="/News" className="nav-link">News</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Contact" className="nav-link">Contact</Link>
                </li>
              </ul>

              <div className="ml-auto">
                <Link to="#" className="btn btn-outline rounded-pill">Get a Quote</Link>
              </div>
              <div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light'} mx-3`}>
                            <input className="form-check-input " onClick={props.toggelemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">enable dark mode</label>
                        </div>
            </div>
          </div>
        </nav>


      </header>
    </>
  )
}

export default Header;

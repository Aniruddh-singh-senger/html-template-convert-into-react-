import React from 'react'

const Footer = () => {
    return (
        <>
         <footer className="page-footer">
    <div className="container">
      <div className="row justify-content-center mb-5">
        <div className="col-lg-3 py-3">
          <h3>Digi<span className="text-primary">Gram.</span></h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

          <p><a to="#" >digigram@mail.com</a></p>
          <p><a to="#">+00 1122 3344 5566</a></p>
        </div>
        <div className="col-lg-3 py-3">
          <h5>Quick Links</h5>
          <ul className="footer-menu">
            <li><a to="#">How it works</a></li>
            <li><a to="#">Security</a></li>
            <li><a to="#">Pricing</a></li>
            <li><a to="#">Resources</a></li>
            <li><a to="#">Report a Bug</a></li>
          </ul>
        </div>
        <div className="col-lg-3 py-3">
          <h5>About Us</h5>
          <ul className="footer-menu">
            <li><a to="#">About Us</a></li>
            <li><a to="#">Jobs</a></li>
            <li><a to="#">Our Teams</a></li>
            <li><a to="#">Testimonials</a></li>
            <li><a to="#">News & Press</a></li>
          </ul>
        </div>
        <div className="col-lg-3 py-3">
          <h5>Subscribe</h5>
          <form action="#">
            <input type="text" className="form-control" placeholder="Enter your mail.."/>
          </form>

          <div className="sosmed-button mt-4">
            <a to="#"><span className="mai-logo-facebook-f"></span></a>
            <a to="#"><span className="mai-logo-twitter"></span></a>
            <a to="#"><span className="mai-logo-google"></span></a>
            <a to="#"><span className="mai-logo-linkedin"></span></a>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6 py-2">
          <p id="copyright">&copy; 2020 <a to="https://macodeid.com/">MACode ID</a>. All rights reserved</p>
        </div>
        <div className="col-sm-6 py-2 text-right">
          <div className="d-inline-block px-3">
            <a to="#">Privacy</a>
          </div>
          <div className="d-inline-block px-3">
            <a to="#">Contact Us</a>
          </div>
        </div>
      </div>
    </div> 
  </footer>   
        </>
    )
}

export default Footer

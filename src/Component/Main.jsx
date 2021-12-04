import React from 'react';
import Mains from './Mains';
import Middle from './Middle';
import Contactus from './Contactus';
import Footer from './Footer';
import Blog from './Blog';
import Review from './Review';
import Price from './Price';
import Partner from './Partner';



const Main = () => {
    return (
        <>
           <main>
           <div className="page-banner home-banner">
      <div className="container h-100">
        <div className="row align-items-center h-100">
          <div className="col-lg-6 py-3 wow fadeInUp">
            <h1 className="mb-4">Great Companies are built on great Products</h1>
            <p className="text-lg mb-5">Ignite the most powerfull growth engine you have ever built for your company</p>

            <a href="#" className="btn btn-outline border text-secondary">More Info</a>
            <a href="#" className="btn btn-primary btn-split ml-2">Watch Video <div className="fab"><span className="mai-play"></span></div></a>
          </div>
          <div className="col-lg-6 py-3 wow zoomIn">
            <div className="img-place">
              <img src="../assets/img/bg_image_1.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="page-section features">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 py-3 wow fadeInUp">
            <div className="d-flex flex-row">
              <div className="img-fluid mr-3">
                <img src="../assets/img/icon_pattern.svg" alt=""/>
              </div>
              <div>
                <h5>Provide financial advice by our advisor</h5>
                <p>Copywrite, blogpublic realations content translation.</p>
              </div>
            </div>
          </div>
  
          <div className="col-md-6 col-lg-4 py-3 wow fadeInUp">
            <div className="d-flex flex-row">
              <div className="img-fluid mr-3">
                <img src="../assets/img/icon_pattern.svg" alt=""/>
              </div>
              <div>
                <h5>Complete solutions for global organisations</h5>
                <p>Copywrite, blogpublic realations content translation.</p>
              </div>
            </div>
          </div>
  
          <div className="col-md-6 col-lg-4 py-3 wow fadeInUp">
            <div className="d-flex flex-row">
              <div className="img-fluid mr-3">
                <img src="../assets/img/icon_pattern.svg" alt=""/>
              </div>
              <div>
                <h5>Provide financial advice by our advisor</h5>
                <p>Copywrite, blogpublic realations content translation.</p>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div> 
  <Mains/>
  <Middle/>
    <Price/>
    <Review/>
    <Contactus/>
    <Blog/>
    <Partner/>
  </main>  
<Footer/>
        </>
    )
}

export default Main

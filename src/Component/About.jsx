import React from 'react';
import Footer from './Footer';
import Mains from './Mains';
import Partner from './Partner';
import Review from './Review';



const About = () => {
  return (
    <>

      <div className="container mt-5">
        <div className="page-banner">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-md-6">
              <nav aria-label="Breadcrumb">
                <ul className="breadcrumb justify-content-center py-0 bg-transparent">
                  <li className="breadcrumb-item"><a to="index.html">Home</a></li>
                  <li className="breadcrumb-item active">About</li>
                </ul>
              </nav>
              <h1 className="text-center">About Us</h1>
            </div>
          </div>
        </div>
      </div>
      <main>
        <Mains />
        <Review />
        <Partner />
        <Footer />
      </main>
    </>
  )
}

export default About

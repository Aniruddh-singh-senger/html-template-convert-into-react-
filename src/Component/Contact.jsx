import React from 'react';
import Contactus from './Contactus';
import Footer from './Footer';


const Contact = () => {
    return (
        <>
            <div className="container mt-5">
      <div className="page-banner">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-md-6">
            <nav aria-label="Breadcrumb">
              <ul className="breadcrumb justify-content-center py-0 bg-transparent">
                <li className="breadcrumb-item"><a to="index.html">Home</a></li>
                <li className="breadcrumb-item active">Contact</li>
              </ul>
            </nav>
            <h1 className="text-center">Contact Us</h1>
          </div>
        </div>
      </div>
    </div> 
    <Contactus/>
    <Footer/>
        </>
    )
}

export default Contact

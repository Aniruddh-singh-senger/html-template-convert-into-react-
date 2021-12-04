import React from 'react';
import Footer from './Footer';
import Middle from './Middle';



const Services = () => {
    return (
        <>
          <header>
    

    <div className="container mt-5">
      <div className="page-banner">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-md-6">
            <nav aria-label="Breadcrumb">
              <ul className="breadcrumb justify-content-center py-0 bg-transparent">
                <li className="breadcrumb-item"><a to="index.html">Home</a></li>
                <li className="breadcrumb-item active">Services</li>
              </ul>
            </nav>
            <h1 className="text-center">Services</h1>
          </div>
        </div>
      </div>
    </div>
  </header>
  <Middle/>
  <Footer/>
  
        </>
    )
}

export default Services

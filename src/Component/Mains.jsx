import React from 'react'

const Mains = () => {
    return (
        <>
         <div className="page-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 py-3 wow zoomIn">
            <div className="img-place text-center">
              <img src="../assets/img/bg_image_2.png" alt=""/>
            </div>
          </div>
          <div className="col-lg-6 py-3 wow fadeInRight">
            <h2 className="title-section">We're <span className="marked">Dynamic</span> Team of Creatives People</h2>
            <div className="divider"></div>
            <p>We provide marketing services to startups & small business to looking for partner for their digital media, design & dev lead generation & communication.</p>
            <div className="img-place mb-3">
              <img src="../assets/img/testi_image.png" alt=""/>
            </div>
            <a href="#" className="btn btn-primary">More Details</a>
            <a href="#" className="btn btn-outline border ml-2">Success Stories</a>
          </div>
        </div>
      </div> 
    </div> 
  
    <div className="page-section counter-section">
      <div className="container">
        <div className="row align-items-center text-center">
          <div className="col-lg-4">
            <p>Total Invest</p>
            <h2>$<span className="number" data-number="816278"></span></h2>
          </div>
          <div className="col-lg-4">
            <p>Yearly Revenue</p>
            <h2>$<span className="number" data-number="216422"></span></h2>
          </div>
          <div className="col-lg-4">
            <p>Growth Ration</p>
            <h2><span className="number" data-number="73"></span>%</h2>
          </div>
        </div>
      </div> 
    </div>
        </>
    )
}

export default Mains;

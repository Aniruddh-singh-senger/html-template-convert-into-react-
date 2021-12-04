import React from 'react'

const NewsReview = () => {
    return (
        <>
           
          <div className="col-md-6 col-lg-4 py-3">
            <div className="card-blog">
              <div className="header">
                <div className="avatar">
                  <img src="../assets/img/person/person_1.jpg" alt=""/>
                </div>
                <div className="entry-footer">
                  <div className="post-author">Sam Newman</div>
                  <a to="#" className="post-date">23 Apr 2020</a>
                </div>
              </div>
              <div className="body">
                <div className="post-title"><a to="blog-single.html">What is Business Management?</a></div>
                <div className="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              </div>
              <div className="footer">
                <a to="blog-single.html">Read More <span className="mai-chevron-forward text-sm"></span></a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 py-3">
            <div className="card-blog">
              <div className="header">
                <div className="avatar">
                  <img src="../assets/img/person/person_2.jpg" alt=""/>
                </div>
                <div className="entry-footer">
                  <div className="post-author">Sam Newman</div>
                  <a to="#" className="post-date">23 Apr 2020</a>
                </div>
              </div>
              <div className="body">
                <div className="post-title"><a to="blog-single.html">What is Assets Management?</a></div>
                <div className="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              </div>
              <div className="footer">
                <a to="blog-single.html">Read More <span className="mai-chevron-forward text-sm"></span></a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 py-3">
            <div className="card-blog">
              <div className="header">
                <div className="avatar">
                  <img src="../assets/img/person/person_3.jpg" alt=""/>
                </div>
                <div className="entry-footer">
                  <div className="post-author">Sam Newman</div>
                  <a to="#" className="post-date">23 Apr 2020</a>
                </div>
              </div>
              <div className="body">
                <div className="post-title"><a to="blog-single.html">What is Code of Conduct Business?</a></div>
                <div className="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              </div>
              <div className="footer">
                <a to="blog-single.html">Read More <span className="mai-chevron-forward text-sm"></span></a>
              </div>
            </div>
          </div> 
        </>
    )
}

export default NewsReview

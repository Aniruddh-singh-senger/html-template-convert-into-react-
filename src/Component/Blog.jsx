import React from 'react';
import { Link } from 'react-router-dom';



const Blog = () => {
    return (
        <>
            <div className="page-section border-top">
      <div className="container">
        <div className="text-center wow fadeInUp">
          <div className="subhead">Our Blog</div>
          <h2 className="title-section">Read our latest <span className="marked">News</span></h2>
          <div className="divider mx-auto"></div>
        </div>
        <div className="row my-5 card-blog-row">
          <div className="col-md-6 col-lg-3 py-3 wow fadeInUp">
            <div className="card-blog">
              <div className="header">
                <div className="entry-footer">
                  <div className="post-author">Sam Newman</div>
                  <Link to="#" className="post-date">23 Apr 2020</Link>
                </div>
              </div>
              <div className="body">
                <div className="post-title"><Link to="blog-single.html">What is Business Management?</Link></div>
              </div>
              <div className="footer">
                <Link to="/BlogDetails">Read More <span className="mai-chevron-forward text-sm"></span></Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 py-3 wow fadeInUp">
            <div className="card-blog">
              <div className="header">
                <div className="avatar">
                  <img src="../Linkssets/img/person/person_1.jpg" alt=""/>
                </div>
                <div className="entry-footer">
                  <div className="post-author">Sam Newman</div>
                  <Link to="#" className="post-date">23 Apr 2020</Link>
                </div>
              </div>
              <div className="body">
                <div className="post-title"><Link to="blog-single.html">What is Business Management?</Link></div>
                <div className="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              </div>
              <div className="footer">
                <Link to="/BlogDetails">Read More <span className="mai-chevron-forward text-sm"></span></Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 py-3 wow fadeInUp">
            <div className="card-blog">
              <div className="header">
                <div className="avatar">
                  <img src="../Linkssets/img/person/person_2.jpg" alt=""/>
                </div>
                <div className="entry-footer">
                  <div className="post-author">Sam Newman</div>
                  <Link to="#" className="post-date">23 Apr 2020</Link>
                </div>
              </div>
              <div className="body">
                <div className="post-title"><Link to="blog-single.html">What is Business Management?</Link></div>
                <div className="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              </div>
              <div className="footer">
                <Link to="/BlogDetails">Read More <span className="mai-chevron-forward text-sm"></span></Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 py-3 wow fadeInUp">
            <div className="card-blog">
              <div className="header">
                <div className="avatar">
                  <img src="../Linkssets/img/person/person_3.jpg" alt=""/>
                </div>
                <div className="entry-footer">
                  <div className="post-author">Sam Newman</div>
                  <Link to="#" className="post-date">23 Apr 2020</Link>
                </div>
              </div>
              <div className="body">
                <div className="post-title"><Link to="blog-single.html">What is Business Management?</Link></div>
                <div className="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              </div>
              <div className="footer">
                <Link to="/BlogDetails">Read More <span className="mai-chevron-forward text-sm"></span></Link>
              </div>
            </div>
          </div>
        </div>
  
        <div className="text-center">
          <Link to="blog.html" className="btn btn-outline-primary rounded-pill">Discover More</Link>
        </div>
      </div> 
    </div> 
    
        </>
    )
}

export default Blog;

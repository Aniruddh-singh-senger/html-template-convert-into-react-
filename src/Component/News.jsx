import React from 'react';
import Footer from './Footer';
import NewsReview from './NewsReview';



const News = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="page-banner">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-md-6">
                            <nav aria-label="Breadcrumb">
                                <ul className="breadcrumb justify-content-center py-0 bg-transparent">
                                    <li className="breadcrumb-item"><a to="index.html">Home</a></li>
                                    <li className="breadcrumb-item active">News</li>
                                </ul>
                            </nav>
                            <h1 className="text-center">News</h1>
                        </div>
                    </div>
                </div>
            </div>
            <main>
                <div className="page-section">
                    <div className="container">
                        <div className="row">
                            <NewsReview />
                            <NewsReview />
                            <NewsReview />
                            <div className="col-12 mt-5">
                                <nav aria-label="Page Navigation">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled">
                                            <a className="page-link" to="#" tabindex="-1" aria-disabled="true">Previous</a>
                                        </li>
                                        <li className="page-item"><a className="page-link" to="#">1</a></li>
                                        <li className="page-item active" aria-current="page">
                                            <a className="page-link" to="#">2 <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="page-item"><a className="page-link" to="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" to="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default News

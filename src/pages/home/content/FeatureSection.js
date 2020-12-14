import React from 'react';
import {Link} from "react-router-dom";

export default class FeatureSection extends React.Component{
    render() {
        return(
            <>
                {/* Feature Section Begin */}
                <section className="feature spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="feature__text">
                                    <div className="section-title">
                                        <span>Our Feature</span>
                                        <h2>We Are a Trusted Name In Auto</h2>
                                    </div>
                                    <div className="feature__text__desc">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                            ut labore et</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                            viverra maecenas accumsan lacus vel facilisis.</p>
                                    </div>
                                    <div className="feature__text__btn">
                                        <a href="#" className="primary-btn">About Us</a>
                                        <a href="#" className="primary-btn partner-btn">Our Partners</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 offset-lg-4">
                                <div className="row">
                                    <div className="col-lg-6 col-md-4 col-6">
                                        <div className="feature__item">
                                            <div className="feature__item__icon">
                                                <img src="img/feature/feature-1.png" alt />
                                            </div>
                                            <h6>Engine</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-4 col-6">
                                        <div className="feature__item">
                                            <div className="feature__item__icon">
                                                <img src="img/feature/feature-2.png" alt />
                                            </div>
                                            <h6>Turbo</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-4 col-6">
                                        <div className="feature__item">
                                            <div className="feature__item__icon">
                                                <img src="img/feature/feature-3.png" alt />
                                            </div>
                                            <h6>Colling</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-4 col-6">
                                        <div className="feature__item">
                                            <div className="feature__item__icon">
                                                <img src="img/feature/feature-4.png" alt />
                                            </div>
                                            <h6>Suspension</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-4 col-6">
                                        <div className="feature__item">
                                            <div className="feature__item__icon">
                                                <img src="img/feature/feature-5.png" alt />
                                            </div>
                                            <h6>Electrical</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-4 col-6">
                                        <div className="feature__item">
                                            <div className="feature__item__icon">
                                                <img src="img/feature/feature-6.png" alt />
                                            </div>
                                            <h6>Brakes</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Feature Section End */}
            </>
        )
    }
}
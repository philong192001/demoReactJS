import React from 'react';
import {Link} from "react-router-dom";

export default class LatestBlog extends React.Component{
    render() {
        return(
            <>
                {/* Latest Blog Section Begin */}
                <section className="latest spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <span>Our Blog</span>
                                    <h2>Latest News Updates</h2>
                                    <p>Sign up for the latest Automobile Industry information and more. Duis aute<br /> irure
                                        dolorin reprehenderits volupta velit dolore fugiat.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="latest__blog__item">
                                    <div className="latest__blog__item__pic set-bg" data-setbg="img/latest-blog/lb-1.jpg" style={{backgroundImage : `url(${"img/latest-blog/lb-1.jpg"})`}}>
                                        <ul>
                                            <li>By Polly Williams</li>
                                            <li>Dec 19, 2018</li>
                                            <li>Comment</li>
                                        </ul>
                                    </div>
                                    <div className="latest__blog__item__text">
                                        <h5>Benjamin Franklin S Method Of Habit Formation</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel
                                            facilisis.</p>
                                        <Link to="/">View More <i className="fa fa-long-arrow-right" /></Link>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="latest__blog__item">
                                    <div className="latest__blog__item__pic set-bg" data-setbg="img/latest-blog/lb-2.jpg" style={{backgroundImage : `url(${"img/latest-blog/lb-2.jpg"})`}}>
                                        <ul>
                                            <li>By Mattie Ramirez</li>
                                            <li>Dec 19, 2018</li>
                                            <li>Comment</li>
                                        </ul>
                                    </div>
                                    <div className="latest__blog__item__text">
                                        <h5>How To Set Intentions That Energize You</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel
                                            facilisis.</p>
                                        <Link to="/">View More <i className="fa fa-long-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="latest__blog__item">
                                    <div className="latest__blog__item__pic set-bg" data-setbg="img/latest-blog/lb-3.jpg" style={{backgroundImage : `url(${"img/latest-blog/lb-3.jpg"})`}}>
                                        <ul>
                                            <li>By Nicholas Brewer</li>
                                            <li>Dec 19, 2018</li>
                                            <li>Comment</li>
                                        </ul>
                                    </div>
                                    <div className="latest__blog__item__text">
                                        <h5>Burning Desire Golden Key Or Red Herring</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel
                                            facilisis.</p>
                                        <Link to="/">View More <i className="fa fa-long-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Latest Blog Section End */}
            </>
        )
    }
}
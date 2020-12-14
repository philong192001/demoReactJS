import React from 'react';
import {Link} from 'react-router-dom';

export default class ChooseSection extends React.Component{
    render() {
        return(
            <>
                {/* Chooseus Section Begin */}
                <section className="chooseus spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="chooseus__text">
                                    <div className="section-title">
                                        <h2>Why People Choose Us</h2>
                                        <p>Duis aute irure dolorin reprehenderits volupta velit dolore fugiat nulla pariatur
                                            excepteur sint occaecat cupidatat.</p>
                                    </div>
                                    <ul>
                                        <li><i className="fa fa-check-circle" /> Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit.</li>
                                        <li><i className="fa fa-check-circle" /> Integer et nisl et massa tempor ornare vel id orci.
                                        </li>
                                        <li><i className="fa fa-check-circle" /> Nunc consectetur ligula vitae nisl placerat tempus.
                                        </li>
                                        <li><i className="fa fa-check-circle" /> Curabitur quis ante vitae lacus varius pretium.</li>
                                    </ul>
                                    <Link to="/" className="primary-btn">About Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chooseus__video set-bg">
                        <img src="img/chooseus-video.png" alt />
                        <Link to="https://www.youtube.com/watch?v=Xd0Ok-MkqoE" className="play-btn video-popup"><i className="fa fa-play" /></Link>
                    </div>
                </section>
                {/* Chooseus Section End */}
            </>
        )
    }
}
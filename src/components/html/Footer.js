import React from 'react';
import {Link} from "react-router-dom";

export default class  Footer extends  React.Component{
    render() {
        return(
            <>
                {/* Footer Section Begin */}
                <footer className="footer set-bg" data-setbg="img/footer-bg.jpg" style={{backgroundImage:`url(${"img/footer-bg.jpg"})`}}>
                    <div className="container">
                        <div className="footer__contact">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="footer__contact__title">
                                        <h2>Contact Us Now!</h2>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="footer__contact__option">
                                        <div className="option__item"><i className="fa fa-phone" /> (+12) 345 678 910</div>
                                        <div className="option__item email"><i className="fa fa-envelope-o" /> Colorlib@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <div className="footer__about">
                                    <div className="footer__logo">
                                        <Link to="/"><img src="img/footer-logo.png" alt /></Link>
                                    </div>
                                    <p>Any questions? Let us know in store at 625 Gloria Union, California, United Stated or call us
                                        on (+1) 96 123 8888</p>
                                    <div className="footer__social">
                                        <Link to="" className="facebook" ><i className="fa fa-facebook" /></Link>
                                        <Link to="" className="twitter" ><i className="fa fa-twitter" /></Link>
                                        <Link to="" className="google" ><i className="fa fa-google" /></Link>
                                        <Link to="" className="skype" ><i className="fa fa-skype" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 offset-lg-1 col-md-3">
                                <div className="footer__widget">
                                    <h5>Infomation</h5>
                                    <ul>
                                        <li><Link to="/"><i className="fa fa-angle-right" /> Purchase</Link> </li>
                                        <li><Link to="/"><i className="fa fa-angle-right" /> Payemnt</Link> </li>
                                        <li><Link to="/"><i className="fa fa-angle-right" /> Shipping</Link> </li>
                                        <li><Link to="/"><i className="fa fa-angle-right" /> Return</Link> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3">
                                <div className="footer__widget">
                                    <h5>Infomation</h5>
                                    <ul>
                                        <li><Link to="/"><i className="fa fa-angle-right" /> Hatchback</Link></li>
                                        <li><Link to="/"><i className="fa fa-angle-right" /> Sedan</Link></li>
                                        <li><Link to="/"><i className="fa fa-angle-right" /> SUV</Link></li>
                                        <li><Link to="/"><i className="fa fa-angle-right" /> Crossover</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer__brand">
                                    <h5>Top Brand</h5>
                                    <ul>
                                        <li><Link to="/"><i className="fa fa-angle-right" /> Abarth</Link></li>
                                        <li><Link to="/"><i className="fa fa-angle-right" /> Acura</Link></li>
                                        <li><Link to="/"><i className="fa fa-angle-right" /> Alfa Romeo</Link></li>
                                        <li><Link to="/"><i className="fa fa-angle-right" /> Audi</Link></li>
                                    </ul>
                                    <ul>
                                        <li><Link to="/"><i className="fa fa-angle-right" /> BMW</Link></li>
                                        <li><Link to="/"><i className="fa fa-angle-right" /> Chevrolet</Link></li>
                                        <li><Link to="/"><i className="fa fa-angle-right" /> Ferrari</Link></li>
                                        <li><Link to="/"><i className="fa fa-angle-right" /> Honda</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        <div className="footer__copyright__text">
                            <p>Copyright © All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
                        </div>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    </div>
                </footer>
                {/* Footer Section End */}
                {/* Search Begin */}
                <div className="search-model">
                    <div className="h-100 d-flex align-items-center justify-content-center">
                        <div className="search-close-switch">+</div>
                        <form className="search-model-form">
                            <input type="text" id="search-input" placeholder="Search here....." />
                        </form>
                    </div>
                </div>
                {/* Search End */}
            </>

        )
    }
}
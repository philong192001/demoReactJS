import React from 'react';
import {Link} from "react-router-dom";

export default class OfferCar extends React.Component{
    render(){
        const products = this.props.products;
        return(
            <>
                {/* Services Section Begin */}
                <section className="services spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <span>Our Services</span>
                                    <h2>What We Offers</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                products.map((e,i)=>{
                                    return(
                                        <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                                            <div className="services__item">
                                                <img src={e.image} alt />
                                                <h5>{e.name}</h5>
                                                <p>{e.description}</p>
                                                <p>${e.price}</p>
                                                <Link to={"/detail/"+e.id}><i className="fa fa-long-arrow-right" /></Link>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                            {/*<div className="col-lg-3 col-md-6 col-sm-6">*/}
                            {/*    <div className="services__item">*/}
                            {/*        <img src="img/services/services-2.png" alt />*/}
                            {/*        <h5>Buying A Cars</h5>*/}
                            {/*        <p>Consectetur adipiscing elit incididunt ut labore et dolore magna aliqua. Risus commodo*/}
                            {/*            viverra maecenas.</p>*/}
                            {/*        <Link to="/1234"><i className="fa fa-long-arrow-right" /></Link>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="col-lg-3 col-md-6 col-sm-6">*/}
                            {/*    <div className="services__item">*/}
                            {/*        <img src="img/services/services-3.png" alt />*/}
                            {/*        <h5>Car Maintenance</h5>*/}
                            {/*        <p>Consectetur adipiscing elit incididunt ut labore et dolore magna aliqua. Risus commodo*/}
                            {/*            viverra maecenas.</p>*/}
                            {/*        <Link to="/"><i className="fa fa-long-arrow-right" /></Link>*/}

                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="col-lg-3 col-md-6 col-sm-6">*/}
                            {/*    <div className="services__item">*/}
                            {/*        <img src="img/services/services-4.png" alt />*/}
                            {/*        <h5>Support 24/7</h5>*/}
                            {/*        <p>Consectetur adipiscing elit incididunt ut labore et dolore magna aliqua. Risus commodo*/}
                            {/*            viverra maecenas.</p>*/}
                            {/*        <Link to="/"><i className="fa fa-long-arrow-right" /></Link>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </section>
                {/* Services Section End */}
            </>
        )
    }
}
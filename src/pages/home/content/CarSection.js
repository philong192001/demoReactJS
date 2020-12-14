import React from 'react';
import {Link} from 'react-router-dom';

export default class CarSection extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            foods:[],
            cate:{}
        }
    }
    componentDidMount() {
        fetch("https://foodgroup.herokuapp.com/api/category/3")
            .then(rs=>rs.json())
            .then(rs=>{
                this.setState({
                    cate:rs.data.category,
                    foods:rs.data.foods

                })
            })

    }

    render() {
        return(
            <>
                {/* Car Section Begin */}
                <section className="car spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <span>Our Car</span>
                                    {
                                        <h2>{this.state.cate.name}</h2>
                                    }

                                </div>
                                <ul className="filter__controls">
                                    <li className="active" data-filter="*">Most Researched</li>
                                    <li data-filter=".sale">Latest on sale</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row car-filter">
                            {
                                this.state.foods.map((e,i)=>{
                                    return(
                                        <div className="col-lg-3 col-md-4 col-sm-6 mix">
                                            <div className="car__item">
                                                <div className="car__item__pic__slider owl-carousel">
                                                    <img src={e.image} alt />
                                                    <img src={e.image} alt />
                                                    <img src={e.image} alt />
                                                    <img src={e.image} alt />
                                                </div>
                                                <div className="car__item__text">
                                                    <div className="car__item__text__inner">
                                                        <div className="label-date">2016</div>
                                                        <h5>
                                                            <Link to="/">{e.name}</Link>
                                                        </h5>
                                                        <ul>
                                                            <li><span>{e.price}</span> mi</li>
                                                            <li>Auto</li>
                                                            <li><span>{e.price}</span> hp</li>
                                                        </ul>
                                                    </div>
                                                    <div className="car__item__price">
                                                        <span className="car-option">{e.description}</span>
                                                        <h6>{e.price}<span>/Month</span></h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                            {/*<div className="col-lg-3 col-md-4 col-sm-6 mix sale">*/}
                            {/*    <div className="car__item">*/}
                            {/*        <div className="car__item__pic__slider owl-carousel">*/}
                            {/*            <img src="img/cars/car-2.jpg" alt />*/}
                            {/*            <img src="img/cars/car-8.jpg" alt />*/}
                            {/*            <img src="img/cars/car-6.jpg" alt />*/}
                            {/*            <img src="img/cars/car-4.jpg" alt />*/}
                            {/*        </div>*/}
                            {/*        <div className="car__item__text">*/}
                            {/*            <div className="car__item__text__inner">*/}
                            {/*                <div className="label-date">2020</div>*/}
                            {/*                <h5><a href="#">Toyota camry asv50l-jeteku</a></h5>*/}
                            {/*                <ul>*/}
                            {/*                    <li><span>35,000</span> mi</li>*/}
                            {/*                    <li>Auto</li>*/}
                            {/*                    <li><span>700</span> hp</li>*/}
                            {/*                </ul>*/}
                            {/*            </div>*/}
                            {/*            <div className="car__item__price">*/}
                            {/*                <span className="car-option sale">For Sale</span>*/}
                            {/*                <h6>$73,900</h6>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="col-lg-3 col-md-4 col-sm-6 mix">*/}
                            {/*    <div className="car__item">*/}
                            {/*        <div className="car__item__pic__slider owl-carousel">*/}
                            {/*            <img src="img/cars/car-3.jpg" alt />*/}
                            {/*            <img src="img/cars/car-8.jpg" alt />*/}
                            {/*            <img src="img/cars/car-6.jpg" alt />*/}
                            {/*            <img src="img/cars/car-5.jpg" alt />*/}
                            {/*        </div>*/}
                            {/*        <div className="car__item__text">*/}
                            {/*            <div className="car__item__text__inner">*/}
                            {/*                <div className="label-date">2017</div>*/}
                            {/*                <h5><a href="#">Bmw s1000rr 2019 m</a></h5>*/}
                            {/*                <ul>*/}
                            {/*                    <li><span>35,000</span> mi</li>*/}
                            {/*                    <li>Auto</li>*/}
                            {/*                    <li><span>700</span> hp</li>*/}
                            {/*                </ul>*/}
                            {/*            </div>*/}
                            {/*            <div className="car__item__price">*/}
                            {/*                <span className="car-option">For Rent</span>*/}
                            {/*                <h6>$299<span>/Month</span></h6>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="col-lg-3 col-md-4 col-sm-6 mix sale">*/}
                            {/*    <div className="car__item">*/}
                            {/*        <div className="car__item__pic__slider owl-carousel">*/}
                            {/*            <img src="img/cars/car-4.jpg" alt />*/}
                            {/*            <img src="img/cars/car-8.jpg" alt />*/}
                            {/*            <img src="img/cars/car-2.jpg" alt />*/}
                            {/*            <img src="img/cars/car-1.jpg" alt />*/}
                            {/*        </div>*/}
                            {/*        <div className="car__item__text">*/}
                            {/*            <div className="car__item__text__inner">*/}
                            {/*                <div className="label-date">2019</div>*/}
                            {/*                <h5><a href="#">Lamborghini huracan evo</a></h5>*/}
                            {/*                <ul>*/}
                            {/*                    <li><span>35,000</span> mi</li>*/}
                            {/*                    <li>Auto</li>*/}
                            {/*                    <li><span>700</span> hp</li>*/}
                            {/*                </ul>*/}
                            {/*            </div>*/}
                            {/*            <div className="car__item__price">*/}
                            {/*                <span className="car-option sale">For Sale</span>*/}
                            {/*                <h6>$120,000</h6>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="col-lg-3 col-md-4 col-sm-6 mix">*/}
                            {/*    <div className="car__item">*/}
                            {/*        <div className="car__item__pic__slider owl-carousel">*/}
                            {/*            <img src="img/cars/car-5.jpg" alt />*/}
                            {/*            <img src="img/cars/car-8.jpg" alt />*/}
                            {/*            <img src="img/cars/car-7.jpg" alt />*/}
                            {/*            <img src="img/cars/car-2.jpg" alt />*/}
                            {/*        </div>*/}
                            {/*        <div className="car__item__text">*/}
                            {/*            <div className="car__item__text__inner">*/}
                            {/*                <div className="label-date">2018</div>*/}
                            {/*                <h5><a href="#">Audi q8 2020</a></h5>*/}
                            {/*                <ul>*/}
                            {/*                    <li><span>35,000</span> mi</li>*/}
                            {/*                    <li>Auto</li>*/}
                            {/*                    <li><span>700</span> hp</li>*/}
                            {/*                </ul>*/}
                            {/*            </div>*/}
                            {/*            <div className="car__item__price">*/}
                            {/*                <span className="car-option">For Rent</span>*/}
                            {/*                <h6>$319<span>/Month</span></h6>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="col-lg-3 col-md-4 col-sm-6 mix sale">*/}
                            {/*    <div className="car__item">*/}
                            {/*        <div className="car__item__pic__slider owl-carousel">*/}
                            {/*            <img src="img/cars/car-6.jpg" alt />*/}
                            {/*            <img src="img/cars/car-8.jpg" alt />*/}
                            {/*            <img src="img/cars/car-3.jpg" alt />*/}
                            {/*            <img src="img/cars/car-1.jpg" alt />*/}
                            {/*        </div>*/}
                            {/*        <div className="car__item__text">*/}
                            {/*            <div className="car__item__text__inner">*/}
                            {/*                <div className="label-date">2016</div>*/}
                            {/*                <h5><a href="#">Mustang shelby gt500</a></h5>*/}
                            {/*                <ul>*/}
                            {/*                    <li><span>35,000</span> mi</li>*/}
                            {/*                    <li>Auto</li>*/}
                            {/*                    <li><span>700</span> hp</li>*/}
                            {/*                </ul>*/}
                            {/*            </div>*/}
                            {/*            <div className="car__item__price">*/}
                            {/*                <span className="car-option sale">For Sale</span>*/}
                            {/*                <h6>$730,900</h6>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="col-lg-3 col-md-4 col-sm-6 mix">*/}
                            {/*    <div className="car__item">*/}
                            {/*        <div className="car__item__pic__slider owl-carousel">*/}
                            {/*            <img src="img/cars/car-7.jpg" alt />*/}
                            {/*            <img src="img/cars/car-2.jpg" alt />*/}
                            {/*            <img src="img/cars/car-4.jpg" alt />*/}
                            {/*            <img src="img/cars/car-1.jpg" alt />*/}
                            {/*        </div>*/}
                            {/*        <div className="car__item__text">*/}
                            {/*            <div className="car__item__text__inner">*/}
                            {/*                <div className="label-date">2020</div>*/}
                            {/*                <h5><a href="#">Lamborghini aventador A90</a></h5>*/}
                            {/*                <ul>*/}
                            {/*                    <li><span>35,000</span> mi</li>*/}
                            {/*                    <li>Auto</li>*/}
                            {/*                    <li><span>700</span> hp</li>*/}
                            {/*                </ul>*/}
                            {/*            </div>*/}
                            {/*            <div className="car__item__price">*/}
                            {/*                <span className="car-option">For Rent</span>*/}
                            {/*                <h6>$422<span>/Month</span></h6>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="col-lg-3 col-md-4 col-sm-6 mix">*/}
                            {/*    <div className="car__item">*/}
                            {/*        <div className="car__item__pic__slider owl-carousel">*/}
                            {/*            <img src="img/cars/car-8.jpg" alt />*/}
                            {/*            <img src="img/cars/car-3.jpg" alt />*/}
                            {/*            <img src="img/cars/car-5.jpg" alt />*/}
                            {/*            <img src="img/cars/car-2.jpg" alt />*/}
                            {/*        </div>*/}
                            {/*        <div className="car__item__text">*/}
                            {/*            <div className="car__item__text__inner">*/}
                            {/*                <div className="label-date">2017</div>*/}
                            {/*                <h5><a href="#">Porsche cayenne turbo s</a></h5>*/}
                            {/*                <ul>*/}
                            {/*                    <li><span>35,000</span> mi</li>*/}
                            {/*                    <li>Auto</li>*/}
                            {/*                    <li><span>700</span> hp</li>*/}
                            {/*                </ul>*/}
                            {/*            </div>*/}
                            {/*            <div className="car__item__price">*/}
                            {/*                <span className="car-option">For Rent</span>*/}
                            {/*                <h6>$322<span>/Month</span></h6>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </section>
                {/* Car Section End */}
            </>
        )
    }
}
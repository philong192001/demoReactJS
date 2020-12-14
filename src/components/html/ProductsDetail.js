import  React from  'react';
import {Link} from "react-router-dom";


export  default class Nav extends React.Component{
    render() {
        const products = this.props.products;
        return(

            <div className="site-section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="title-section text-center col-12">
                            <h2> <strong className="text-primary">Products</strong></h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 block-3 products-wrap">
                            <div className="nonloop-block-3">

                                            <div  className="text-center item col-md-4 mb-4 item-v2">
                                                <span className="onsale">Sale</span>
                                                <a href="shop-single.html"> <img src={products.image} alt="Image"/></a>
                                                <h3 className="text-dark"><a href="shop-single.html">{products.name}</a></h3>
                                                <p className="price">${products.price}</p>
                                                <Link to="/" className="button ui-button">Update</Link>
                                            </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
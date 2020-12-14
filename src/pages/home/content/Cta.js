import React from 'react';
import {Link} from "react-router-dom";

export default class Cta extends React.Component{
    render() {
        return(
            <>
                {/* Cta Begin */}
                <div className="cta">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="cta__item set-bg" data-setbg="img/cta/cta-1.jpg" style={{backgroundImage:`url(${"img/cta/cta-1.jpg"})`}}>
                                    <h4>Do You Want To Buy A Car</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="cta__item set-bg" data-setbg="img/cta/cta-2.jpg" style={{backgroundImage:`url(${"img/cta/cta-2.jpg"})`}}>
                                    <h4>Do You Want To Rent A Car</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Cta End */}
            </>
        )
    }
}
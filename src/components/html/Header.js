import React from 'react';
import {Link} from "react-router-dom";

export default class  Header extends  React.Component{
    constructor(props) {
        super(props);
        this.state={
            menu:[]
        }
    }
    componentDidMount() {
        fetch("https://foodgroup.herokuapp.com/api/menu")
            .then(rs=>rs.json())
            .then(rs=>{
                this.setState({
                    menu:rs.data
                })
            })
    }

    render(){
        const user = this.props.user;
        const menu = this.state.menu;
        return(
            <>
                <header className="header">
                    <div className="header__top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <ul className="header__top__widget">
                                        <li><i className="fa fa-clock-o" /> Week day: 08:00 am to 18:00 pm</li>
                                        <li><i className="fa fa-envelope-o" /> Info.colorlib@gmail.com</li>
                                    </ul>
                                </div>
                                <div className="col-lg-5">
                                    <div className="header__top__right">
                                        <div className="header__top__phone">
                                            <i className="fa fa-phone" />
                                            <span>(+12) 345 678 910</span>
                                        </div>
                                        <div className="header__top__social">
                                            <Link to="/category"><i className="fa fa-facebook" /></Link>
                                            <Link to="/"><i className="fa fa-twitter" /></Link>
                                            <Link to="/"><i className="fa fa-google" /></Link>
                                            <Link to="/"><i className="fa fa-instagram" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2">
                                <div className="header__logo">
                                    <a href="./index.html"><img src="img/logo.png" alt /></a>
                                </div>
                            </div>
                            <div className="col-lg-10">
                                <div className="header__nav">
                                    <nav className="header__menu">
                                        <ul>
                                            {
                                                menu.map((e,i)=>{
                                                    return <li key={i}><Link to={"/category/"+e.id}>{e.name}</Link></li>
                                                })
                                            }
                                            <li>
                                                {
                                                    user.email !== null?
                                                        <Link to="/">{user.fullname}</Link>
                                                        :
                                                        <Link to="/login">Login</Link>
                                                }

                                            </li>
                                            {/*<li className="active"><a href="./index.html">Home</a></li>*/}
                                            {/*<li><a href="/category">Cars</a></li>*/}
                                            {/*<li><a href="./blog.html">Blog</a></li>*/}
                                            {/*<li><a href="#">Pages</a>*/}
                                            {/*    <ul className="dropdown">*/}
                                            {/*        <li><a href="./about.html">About Us</a></li>*/}
                                            {/*        <li><a href="./car-details.html">Car Details</a></li>*/}
                                            {/*        <li><a href="./blog-details.html">Blog Details</a></li>*/}
                                            {/*    </ul>*/}
                                            {/*</li>*/}
                                            {/*<li><a href="./about.html">About</a></li>*/}
                                            {/*<li><a href="./contact.html">Contact</a></li>*/}
                                        </ul>
                                    </nav>
                                    <div className="header__nav__widget">
                                        <div className="header__nav__widget__btn">
                                            <a className="dropbtn" href="#"><i className="fa fa-cart-plus" /></a>
                                            <div className="dropdown-content">
                                                <table className="table table-active table-bordered">
                                                    <thead>
                                                    <tr className="car_item">
                                                        <th className="text-center">Name Car</th>
                                                        <th className="text-center">Image Car</th>
                                                        <th className="text-center">Price</th>
                                                        <th className="text-center">Quantity</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr className="car_item">
                                                        <td className="text-center">1</td>
                                                        <td className="text-center">2</td>
                                                        <td className="text-center">3</td>
                                                        <td className="text-center">4</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <a href="#" className="search-switch"><i className="fa fa-search" /></a>
                                    </div>
                                    <a href="#" className="primary-btn">Add Car</a>
                                </div>
                            </div>
                        </div>
                        <div className="canvas__open">
                            <span className="fa fa-bars" />
                        </div>
                    </div>
                </header>
                {/* Header Section End */}
            </>

        )
    }
}
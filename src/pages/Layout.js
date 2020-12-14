import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Header from "../components/html/Header";
import Home from "./home/Home";
import Category from "./category/Category";
import Detail from "./product/Detail";
import Footer from "../components/html/Footer";
import Login from "./authentication/Login";

export default class Layout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user:{fullname:null,email:null,token:null }
        }
        this.logged = this.logged.bind(this);
    }
    componentDidMount() {
        if(window.localStorage.getItem("user_authetication")!==null){
            const u = JSON.parse(window.localStorage.getItem("user_authetication"));
            this.setState({user:u})
        }
    }
    logged(u){
        this.setState({
            user:u
        })
    }
    render() {
        return (
            <BrowserRouter className="page">
                <Header user={this.state.user}/>
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/category/:id"><Category/></Route>
                    <Route exact path="/detail/:id" ><Detail/> </Route>
                    <Route path="/login"><Login onLogged={this.logged}/></Route>
                </Switch>
                <Footer/>
            </BrowserRouter>
        )
    }
}
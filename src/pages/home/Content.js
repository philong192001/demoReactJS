import React from 'react';
import FindCar from "./content/FindCar";
import OfferCar from "./content/OfferCar";
import FeatureSection from "./content/FeatureSection";
import CarSection from "./content/CarSection";
import ChooseSection from "./content/ChooseSection";
import LatestBlog from "./content/LatestBlog";
import Cta from "./content/Cta";

export default class Content extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            products:[]
        }
    }
    componentDidMount() {
        fetch("https://foodgroup.herokuapp.com/api/today-special")
            .then(rs=>rs.json())
            .then(rs=>{
                this.setState({
                    products: rs.data
                })
            })
    }

    render(){
        return[
            <FindCar/>,
            <OfferCar key={1} products={this.state.products}/>,
            <FeatureSection/>,
            <CarSection/>,
            <ChooseSection/>,
            <LatestBlog/>,
            <Cta/>
        ]
    }
}
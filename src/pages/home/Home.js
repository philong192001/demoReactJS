import React from 'react';
import Content from "./Content";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            number: 0
        }
        this.changeNumber = this.changeNumber.bind(this)
    }

    componentDidMount() {
        fetch("https://foodgroup.herokuapp.com/api/today-special")
            .then(rs => rs.json())
            .then(rs => {
                this.setState({
                    products: rs.data
                })
            })
    }

    changeNumber() {
        let n = this.state.number;
        n++;
        this.setState({number: n});
    }

    render() {
        return (
                <h1>Number:{this.state.number}</h1>,
                <button onClick={this.changeNumber} type="button">Onclick</button>,
                <Content key={1} products={this.state.products}/>
        )
    }
}
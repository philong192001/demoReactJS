import './App.css';
import React from "react";
import Layout from "./pages/Layout";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            count:1
        }
    }
    // changeCount(){
    //     let c = this.state.count;
    //     c++;
    //     this.setState({
    //         count:c
    //     })
    // }
    render() {
        return (
            <Layout/>
        );
    }
}

export default App;

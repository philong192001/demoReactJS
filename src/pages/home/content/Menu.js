import React from 'react';

export default class Menu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
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
    render() {
        return (
           this.state.menu.map((e,i)=>{
               <h1>{e.name}</h1>
           })
        )
    }
}
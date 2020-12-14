import React from 'react'

export  default class Test extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const number = this.props.number
        return (
            <div>
                <h1>{number}</h1>
            </div>
        );
    }
}
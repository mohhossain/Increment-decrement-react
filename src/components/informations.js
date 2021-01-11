import React, { Component } from 'react';

class Informations extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="info">
                <h1>Hello, {this.props.name}</h1>
            </div>
        );
    }
}

export default Informations;
import React, { Component } from 'react';

class Person extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="info">
                <h1>Hello, world</h1>
            </div>
        );
    }
}

export default Person;
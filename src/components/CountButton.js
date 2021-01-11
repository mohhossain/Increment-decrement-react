import React,{ Component } from "react";

class CountButton extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
        };
        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
    }
    incrementCount = () => {
        this.setState({
          count: this.state.count + 1
        });
      };

    decrementCount =()=>{
        this.setState({
            count: this.state.count - 1
        })
        if(this.state.count <= 0){
            alert('Cant be under 0')
            this.setState({
                count: 0
            })
        }
    }
        
    render(){
        
        return(
            <div>
                <h1 className='count'>{this.state.count}</h1>
                <button className='incr' onClick={this.incrementCount}>Increment</button>
                <button className='decr' onClick={this.decrementCount}>Decrement</button>
            </div>
        );
    }
}

export default CountButton;
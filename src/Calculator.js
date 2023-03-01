import React from "react";

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            first : 0,
            second : 0,
            result : 0
        }
    }

    handleFirst = (e) => {
        const  first = e.target.value;
         this.setState({first : first});
    };

    handleSecond = (e) => {
        const  second = e.target.value;
         this.setState({second : second});
    };

    handleAdd = () => {
        const add = parseInt(this.state.first) + parseInt(this.state.second);
        this.setState({result : add});

    };

    handleSubtract = () => {
        const subtract = parseInt(this.state.first) - parseInt(this.state.second);
        this.setState({result : subtract});

    }

    handleMultiply = () => {
        const multiply = parseInt(this.state.first) * parseInt(this.state.second);
        this.setState({result : multiply});

    };

    handleDivide = () => {
        const divide = parseInt(this.state.first) / parseInt(this.state.second);
        this.setState({result : divide});

    };

    render(){
        return (<div>
                <input type = "number" onChange={this.handleFirst}></input>
                <input type = "number" onChange={this.handleSecond}></input>
                <h2>Result: {this.state.result}</h2>
                <button onClick = {this.handleAdd}>+</button>
                <button onClick = {this.handleSubtract}>-</button>
                <button onClick = {this.handleMultiply}>*</button>
                <button onClick = {this.handleDivide}>/</button>

            </div>)
        
    }
}
export default Calculator;
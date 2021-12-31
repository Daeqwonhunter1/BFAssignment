
import React, { Component } from 'react'

export default class SignNumber extends Component {
    state ={
        pNumber:"",
       
    }

    handleChange = (e) => {
        const {name,value} = e.target;
        this.setState({ [name]:value})
    }
    render() {
        return (
            <div>
               <form onSubmit = {(e) => {
                    e.preventDefault();
                    this.props.handleSignNumber(this.state);
                    this.setState({
                        pNumber:""
                    })
                }}>
                
                <input 
                name="pNumber"
                id = "phone-number"
                type = "text"
                value = {this.state.pNumber}
                onChange = {this.handleChange}
                >
                </input>
                <button>Submit</button>
                </form>
            </div>
        )
    }
}

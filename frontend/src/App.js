import React from 'react';
import SignNumber from './Components/SignNumber';
import Quotation from './Components/Quotation';
import './App.css';
import { signNumber } from './services';
import {Route, Routes,withRouter } from "react-router-dom";

class App extends React.Component {
  state ={
    userJWT:""
  }

  handleSignNumber = async(data) => {
    console.log(data)
    await signNumber(data)
      .then((r) => {
        this.setState({userJWT:r})
        console.log(r)
        this.props.history.push("/quote")
      })
      .catch((e) => console.log("e"))
     
  }

  render(){
    return(
      
      <div>

      <Route exact path = "/">
        <SignNumber handleSignNumber = {this.handleSignNumber}/>
      </Route>
      <Route path = "/quote">
        <Quotation signNumber = {this.state.userJWT}/>
      </Route>

      </div>
      
    )
  }
}

export default withRouter(App);
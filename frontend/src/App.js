import React from 'react';
import SignNumber from './Components/SignNumber';
import GetQuoteForm from './Components/GetQuoteForm';
import './App.css';
import { signNumber,getQuote } from './services';
import {Route,withRouter } from "react-router-dom";
import Submit from '../src/Components/Submit'


class App extends React.Component {
  state ={
    quoteResp:"",
    currencyList: [{
      locale: 'de-DE',
      currency: 'EUR',
    },
    {
      locale: 'en-US',
      currency: 'USD',
    },
    {
      locale: 'en-GB',
      currency: 'GBP',
    },
    {
      locale: 'ja-JP',
      currency: 'JPY',
    },
    {
      locale: 'en-IN',
      currency: 'INR',
  }]
  }

  handleSignNumber = async(data) => {
    await signNumber(data)
      .then(() => {
        this.props.history.push("/quote")
      })
      .catch((e) => console.log(e))
     
  }


  handleQuoteForm = async(data) => {
    console.log(data)
    await getQuote(data)
        .then((r) => {
            this.setState({quoteResp:r})
            this.props.history.push("/submit")
        })
        .catch((e) => {
            console.log(e)
        })
}


  render(){
    return(

      <div className='App'>
      <div id = "app-form-container">
      <Route exact path = "/">
        <SignNumber handleSignNumber = {this.handleSignNumber}/>
      </Route>
      <Route exact path = "/quote">
        <GetQuoteForm handleQuoteForm = {this.handleQuoteForm} currencyList = {this.state.currencyList}/>
      </Route>
      <Route exact path = "/submit">
        <Submit quote = {this.state.quoteResp}/>
      </Route>
   
              
      </div>
      </div>
      
    )
  }
}

export default withRouter(App);
import React, { Component } from 'react'
import { getQuote } from '../services'
import GetQuoteForm from './GetQuoteForm'

export default class Quotation extends Component {
    state = {

    }


    handleQuoteForm = async(data) => {
        console.log(data)
        await getQuote(data)
            .then((r) => {
                console.log(r)
            })
            .catch((e) => {
                console.log(e)
            })
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Hi</h1>
                <GetQuoteForm handleQuoteForm = {this.handleQuoteForm} />
            </div>
        )
    }
}

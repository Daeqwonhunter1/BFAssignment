import React, { Component } from 'react';

class Submit extends Component {
    state={
    }

   
    render() {
        return (
            <div id = "quote">
                <label><h3>Keep this Quotation id for reference :</h3> {this.props.quote.quotation_id}</label>
                <br/>

                <label>Total: {new Intl.NumberFormat(this.props.quote.currency_id.locale,{style:'currency',currency: this.props.quote.currency_id.currency}).format(this.props.quote.total)} </label>
                <br/>
                <label>{this.props.quote.currency_id.currency}</label>
            </div>
        );
    }
}

export default Submit;
const mongoose = require('mongoose')


const quoteSchema = new mongoose.Schema({
    age: {
        type:Number,
        required:true
    },
    start_date:{
        type:Number,
        req:true
    },
    end_date: {
        type:Number,
        req:true
    },
    currency_id: {
        type:Object,
        req:true
    },
    token: {
        type:String
    }
})

module.exports = Quote = mongoose.model('quote', quoteSchema)
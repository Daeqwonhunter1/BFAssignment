require('dotenv').config({path: "../config.env"})
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const Quote = require('../models/quoteSchema');


const restrict = (req,res,next) => {
    try {
       const token = req.headers.authorization.split(" ")[1];
       const data = jwt.verify(token, process.env.TOKEN_SECRET);
      
       res.locals.user = {
           pNumber : data.pNumber,
           time: new Date(data.t),
           token,
           iat: data.iat
       };
       next();
    } catch (error) {
        res.json("Enter Phone Number for key")
    }

}



const calcAgeLoad = async (age) => {

    if(age >= 18 && age <= 30 ) {
        return 0.6;
    }else if(age >= 31 && age <= 40) {
        return 0.7;
    }else if(age >= 41 && age <= 50 ) {
        return 0.8;
    }else if(age >= 51 && age <= 60 ) {
        return 0.9;
    }else if(age >= 61 && age <= 70 ) {
        return 1;
    }
}

const calcTripLength = async (endDate,startDate) => {
    /// One Day in milliseconds
    let d = 1000 * 60 * 60 * 24;
    /// Difference in time
    let t = endDate - startDate
    return Math.round(t / d);
}

router.get('/', async (req,res) => {
})
router.post('/r',async(req,res) => {

    const t = new Date()
    const token = jwt.sign({...req.body,t:Date.now()},process.env.TOKEN_SECRET)
    console.log(token )
    res.json(token)
    //Store in LocalStorage
})


router.post('/quotation', restrict, async(req,res) => {
    let fixedRate = 3;
    try {
        let newQuote = await new Quote({
            ...req.body,
            token:res.locals.user.token
            
        });
        newQuote.save(async function(err,quote) {
            if(err) res.send(err);
            
            let ageLoad = await calcAgeLoad(req.body.age)
            let tripLength = await calcTripLength(req.body.end_date,req.body.start_date)
            console.log(quote)
            res.json({
                total: Math.ceil(fixedRate * ageLoad * tripLength),
                currency_id: req.body.currency_id,
                quotation_id: quote._id
            })
        })
    } catch (error) {
        res.send(error)
    }
   
})

module.exports = router;
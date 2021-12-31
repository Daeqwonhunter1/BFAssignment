require('dotenv').config({path: "./config.env"}); 
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const jwt = require('jsonwebtoken')


app.use(express.json())
app.use(bodyParser.json());
app.use(cors());

const quoteRoute = require('./routes/quoteRoute')

app.use('/',quoteRoute)

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URI,
    {useNewUrlParser:true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((e) => console.log(e.message))


const express=require('express')
const app=express()
const dotenv=require('dotenv').config()
const morgan =require('morgan')
const jsonParser=require('body-parser').json()

app.use(morgan('combined'))
app.use(jsonParser)

require('../config/kafkaConfig.js')
require('../routes')(app,jsonParser)


app.listen(process.env.PORT,()=>{
    console.log(`Connected :${process.env.PORT}`);
})
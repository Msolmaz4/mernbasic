require('dotenv').config()
const express = require('express')
const app = express()
const connectDb =require('./config/db')
connectDb()

const PORT = process.env.PORT || 5000


app.listen(PORT,()=>console.log('okey'))
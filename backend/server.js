require('dotenv').config()
const express = require('express')
const app = express()
const connectDb =require('./config/db')
connectDb()
const productsRoutes = require('./routes/productsRoutes')
//kontrol maksatli 
//const product = require('./data/products')
//console.log(product)

const PORT = process.env.PORT || 5000

app.use(express.json())

app.use('/api/products',productsRoutes)


app.listen(PORT,()=>console.log('okey'))
//baglanti kurmak icuin packagejson client tarafinda proxy ekledik 
//"proxy": "http://127.0.01:5000",
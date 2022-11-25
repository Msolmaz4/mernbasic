 
require('dotenv').config()
const mongoose = require('mongoose')

const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('MONGO DB')
    } catch (error) {
        console.log('Mongo db  fehler auftauschen')
        //schauen
        process.exit(1)
    }
}
module.exports =connectDb
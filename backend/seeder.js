require('dotenv').config()

const productsData = require('./data/products')
const connectDb =require('./config/db')
const Product =require('./models/Products')


connectDb()

const importData = async ()=>{
    try {
        await Product.deleteMany({})

        await Product.insertMany(productsData)

        console.log('data import Succes')

        process.exit()
        
    } catch (error) {
        console.error('erroro with ')
        process.exit(1)
        
    }
}

importData()

//bundan sonra package.json data kismini ekledik scripts kismina
//   "data:import": "nodemon seeder.js"
//komut satrinda npm run data:import
//sonra mongoda baktim gordum adatayi
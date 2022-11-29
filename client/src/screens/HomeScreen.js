import React,{useEffect} from 'react'
import Product from '../components/Product'
import './Home.css' 
import {useSelector,useDispatch} from 'react-redux'



const HomeScreen = () => {


  
  return (
    <div className='homescreen'>
      <h2 className='homescreen_title'>Latest Products</h2>
      <div className='homescreen_products'>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
      
      </div>
  )
}

export default HomeScreen
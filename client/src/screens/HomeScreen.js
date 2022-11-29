import React,{useEffect} from 'react'
import Product from '../components/Product'
import './Home.css' 
import {useSelector,useDispatch} from 'react-redux'


//actions
import { getProducts as listProducts } from "../redux/actions/productActions";


const HomeScreen = () => {
  const dispatch = useDispatch();
  
  const getProducts = useSelector((state) => state.getProducts);
  //console.log(getProducts)
  const { products } = getProducts;
  console.log()


//baglantiyi kiurunca proxy uzerinde consol reduxta urunleri gorduk
useEffect(() => {
  dispatch(listProducts());
}, [dispatch]);




  return (
    <div className='homescreen'>
      <h2 className='homescreen_title'>Latest Products</h2>
      <div className='homescreen_products'>
       
      {
          products.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        }
      </div>
      
      </div>
  )
}

export default HomeScreen